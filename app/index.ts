import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as koaSwagger from 'koa2-swagger-ui';
import routers from './routers/index';
import config from './config/default';

const app = new Koa();

app.use(bodyParser({
    enableTypes: ['json'],
    extendTypes: ['application/json'],
    onerror: function (err, ctx) {
        ctx.throw('Body parse error', 422);
    },
}))
    .use(koaSwagger({
        routePrefix: config.swagger.route,
        swaggerOptions: {
            url: config.swagger.specRoute,
        },
        apis: config.swagger.apis,
        hideTopbar: true,
    }))
    .use(routers);


app.listen(config.server.port, () => console.log(`API Server started on port ${config.server.port}`));
