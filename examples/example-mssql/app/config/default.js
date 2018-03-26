const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

const config =  {
  development: {
    server: {
      port
    },
    db: {
      user: '',
      password: '',
      server: '',
      database: ''
    }
  }
};

export default config[env];
