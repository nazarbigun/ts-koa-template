import compose from 'koa-compose';
import routerExample from './router-example';


const routers = [
  routerExample
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
