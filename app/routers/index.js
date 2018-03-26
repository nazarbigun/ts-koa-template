import compose from 'koa-compose';

const routers = [];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
