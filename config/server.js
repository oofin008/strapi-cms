// refs: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/server.html#available-options

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
