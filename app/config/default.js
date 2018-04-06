const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

const config = {
  development: {
    server: {
      port
    },
    db: {},
    swagger: {
      route: '/docs',
      apis: ['../routers/*.js'],
      specRoute: '/docs/swagger.json'
    }
  }
};

export default config[env];
