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
          smileCounts: {
            counts: 0,
            isClicked: false,
          },
          seeCounts: {
            counts: 0,
            isClicked: false,
          },
          hiCounts: {
            counts: 0,
            isClicked: false,
          },
        };
        try {
          let smileCounts = await client.get('smiles:counts');
          let seeCounts = await client.get('see:counts');
          let hiCounts = await client.get('hi:counts');
          response.smileCounts.counts = smileCounts || 0;
          response.seeCounts.counts = seeCounts || 0;
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
      handler: (request, h) => {
        return {};
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
