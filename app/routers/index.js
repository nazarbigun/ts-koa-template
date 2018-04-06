import compose from 'koa-compose';
import utils from './utils.js';

const routers = [
    utils
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
