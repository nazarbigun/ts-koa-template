import * as Router from 'koa-router';
import { getData } from '../controllers/mongo';

const mongoRouter: Router = new Router();

mongoRouter.get('/mongoTest', getData);

export default mongoRouter;
