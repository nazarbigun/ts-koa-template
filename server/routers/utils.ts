import utilsCtrl from '../controllers/utils';
import Router = require('koa-router');


const utils = new Router();

utils.get('/docs/swagger.json', utilsCtrl.createSpec);

export default utils;
