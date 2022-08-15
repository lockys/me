'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();
const redis = require('async-redis');
const url = require('url');

let client;
if (process.env.REDISCLOUD_URL) {
  const rtg = url.parse(process.env.REDISCLOUD_URL);
  client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(':')[1]);
} else {
  client = redis.createClient();
}

client.on('connect', () => {
  console.log('Redis client connected');
});

const init = async () => {
  const server = Hapi.server({
    port: ~~process.env.PORT || 3000,
    host: '0.0.0.0',
  });

  const routes = [
    {
      method: 'GET',
      path: '/emoji-counts',
      config: {
        cors: {
          origin: [process.env.ALLOWED_CORS_DOMAIN],
        },
      },
      handler: async (request, h) => {
        const response = {
          thumbsupCounts: {
            counts: 0,
            isClicked: false,
          },
          looksCounts: {
            counts: 0,
            isClicked: false,
          },
          hiCounts: {
            counts: 0,
            isClicked: false,
          },
        };
        try {
          let thumbsupCounts = await client.get('thumbsup:counts');
          let looksCounts = await client.get('looks:counts');
          let hiCounts = await client.get('hi:counts');
          response.thumbsupCounts.counts = thumbsupCounts || 0;
          response.looksCounts.counts = looksCounts || 0;
          response.hiCounts.counts = hiCounts || 0;
        } catch (e) {
          console.error(e);
        }

        return response;
      },
    },
    {
      method: 'POST',
      path: '/send-emoji/{emoji}',
      config: {
        cors: {
          origin: [process.env.ALLOWED_CORS_DOMAIN],
        },
      },
      handler: async (request, h) => {
        const { emoji } = request.params;

        const response = {
          thumbsupCounts: {
            counts: 0,
            isClicked: false,
          },
          looksCounts: {
            counts: 0,
            isClicked: false,
          },
          hiCounts: {
            counts: 0,
            isClicked: false,
          },
        };
        try {
          let thumbsupCounts = await client.get('thumbsup:counts');
          let looksCounts = await client.get('looks:counts');
          let hiCounts = await client.get('hi:counts');

          switch (emoji) {
            case 'thumbsupCounts':
              response.thumbsupCounts.counts = parseInt(thumbsupCounts) + 1;
              await client.set('thumbsup:counts', response.thumbsupCounts.counts);
              break;
            case 'looksCounts':
              response.looksCounts.counts = parseInt(looksCounts) + 1;
              await client.set('looks:counts', response.looksCounts.counts);
              break;
            case 'hiCounts':
              response.hiCounts.counts = parseInt(hiCounts) + 1;
              await client.set('hi:counts', response.hiCounts.counts);
              break;
          }
        } catch (e) {
          console.error(e);
        }

        return response;
      },
    },
  ];

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
