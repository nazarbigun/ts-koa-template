import utils from './utils';
import mongoRouter from './mongo';
import compose = require('koa-compose');

const routers = [
    utils,
    mongoRouter,
];

const middleware = [];
routers.forEach((router) => {
    middleware.push(router.routes());
    middleware.push(router.allowedMethods());
});


export default compose(middleware);
