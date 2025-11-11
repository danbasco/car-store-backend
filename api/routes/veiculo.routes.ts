import { Router } from 'express';
import { VeiculoController } from '../controllers/veiculo.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { protectedMiddleware } from '../middlewares/jwt.token.middleware.js';

const router = Router();
const controller = new VeiculoController();

//router.post('/', protectedMiddleware, controller.create);
//router.get('/', protectedMiddleware, controller.findAll);
//router.get('/:id', protectedMiddleware, controller.findById);

router.post('/',  controller.create);
router.get('/',  controller.findAll);
router.get('/:id',  controller.findById);

router.post(
  '/:id/imagens', 
  upload.single('foto'),
  controller.addImage
);

export default router;