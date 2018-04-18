import * as compose from 'koa-compose';
import utils from './utils';
import mongoRouter from './mongo';
import mssqlRouter from './mssql';

const routers = [
    utils,
    mongoRouter,
    mssqlRouter,
];

const middleware = [];
routers.forEach((router) => {
    middleware.push(router.routes());
    middleware.push(router.allowedMethods());
});


export default compose(middleware);
