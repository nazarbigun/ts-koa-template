const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

const config = {
  development: {
    server: {
      port
    }
    db: {}
  }
};

export default config[env];
