import Router from 'koa-router';
import exampleCtrl from '../controllers/example';


const router = new Router();

router.get('/example', exampleCtrl.getExampleDocuments);

export default router;
