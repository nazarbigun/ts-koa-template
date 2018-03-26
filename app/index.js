import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routers from './routers';
import config from  './config/default';

const app = new Koa();

app
  .use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
      ctx.throw('Body parse error', 422);
    }
  }))
  .use(routers)


app.listen(config.server.port, () => console.log(`API Server started on port ${config.server.port}`));
