import * as Router from 'koa-router';
import { getData } from '../controllers/mssql';

const mssqlRouter: Router = new Router();

mssqlRouter.get('/mssqlTest', getData);

export default mssqlRouter;
