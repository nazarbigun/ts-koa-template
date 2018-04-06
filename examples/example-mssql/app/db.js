import mssql from 'mssql';
import config from './config/default';

let connectionPool;

const dbConnect = () => {
  if (!connectionPool) {
    connectionPool = new mssql.ConnectionPool({
      user: config.db.user,
      password: config.db.password,
      server: config.db.server,
      database: config.db.database,
      options: {
        encrypt: true // Use this if you're on Windows Azure
      }
    });
    connectionPool.connect((err) => {
      if (err) {
        console.error('Failed to connect to db', err);
      } else {
        console.log('Connected to db');
      }
    });
  }
  return connectionPool;
};

export default dbConnect();
