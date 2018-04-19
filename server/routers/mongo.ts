import { getData } from '../controllers/mongo';
import Router = require('koa-router');

const mongoRouter: Router = new Router();

mongoRouter.get('/mongoTest', getData);

export default mongoRouter;
