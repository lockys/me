'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();
const redis = require('async-redis');
const url = require('url');
const numeral = require('numeral');

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
          response.thumbsupCounts.counts = numeral(thumbsupCounts || 0).format('0a');
          response.looksCounts.counts = numeral(looksCounts || 0).format('0a');
          response.hiCounts.counts = numeral(hiCounts || 0).format('0a');
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

          response.thumbsupCounts.counts = numeral(thumbsupCounts || 0).format('0a');
          response.looksCounts.counts = numeral(looksCounts || 0).format('0a');
          response.hiCounts.counts = numeral(hiCounts || 0).format('0a');

          switch (emoji) {
            case 'thumbsupCounts':
              response.thumbsupCounts.counts = numeral(parseInt(thumbsupCounts || 0) + 1).format('0a');
              await client.set('thumbsup:counts', response.thumbsupCounts.counts, 'EX', 60 * 60);
              break;
            case 'looksCounts':
              response.looksCounts.counts = numeral(parseInt(looksCounts || 0) + 1).format('0a');
              await client.set('looks:counts', response.looksCounts.counts, 'EX', 60 * 60);
              break;
            case 'hiCounts':
              response.hiCounts.counts = numeral(parseInt(hiCounts || 0) + 1).format('0a');
              await client.set('hi:counts', response.hiCounts.counts, 'EX', 60 * 60);
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
  await server.register({
    plugin: require('hapi-rate-limit'),
    options: {},
  });
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
