import * as Koa from 'koa';
import * as koaSwagger from 'koa2-swagger-ui';
import bodyParser = require('koa-bodyparser');

import routers from './routers/index';
import config from './core/config/default';
import logger from './core/logger/app-logger';
import { mongooseConnect } from './instances/mongoose';

const app = new Koa();

app.use(bodyParser())
    .use(koaSwagger({
        routePrefix: config.swagger.route,
        swaggerOptions: {
            url: config.swagger.specRoute,
        },
        apis: config.swagger.apis,
        hideTopbar: true,
    }))
    .use(routers);

// connect to dbs
mongooseConnect();

app.listen(config.server.port, () => logger.info(`Server started on port ${config.server.port}`));
