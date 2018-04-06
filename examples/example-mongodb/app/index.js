import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import routers from './routers';
import config from  './config/default';

const app = new Koa();

mongoose.connect(config.mongo.hosts.join(','), config.mongo.options);
mongoose.connection.on('error', () => console.error('MongoDB connection error'));

app
  .use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
      ctx.throw('Body parse error', 422);
    }
  }))
  .use(routers);


 app.listen(config.server.port, () => console.log(`API Server started on port ${config.server.port}`));
