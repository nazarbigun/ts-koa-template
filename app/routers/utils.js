import Router from 'koa-router';
import utilsCtrl from '../controllers/utils';


const utils = new Router();

utils.get('/docs/swagger.json', utilsCtrl.createSpec);

export default utils;
