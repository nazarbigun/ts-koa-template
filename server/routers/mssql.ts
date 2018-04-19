import { getData } from '../controllers/mssql';
import * as createAuthGuard from 'mineq-service-nodejs-utils/lib/auth';
import Router = require('koa-router');

const mssqlRouter: Router = new Router();

mssqlRouter.get('/mssqlTest', createAuthGuard(), getData);

export default mssqlRouter;
