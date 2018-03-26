const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    server: {
      port
    },
    mongo: {
      hosts: [
        'mongodb://localhost:27017/example'
      ],
    }
  }
};

export default config[env]
