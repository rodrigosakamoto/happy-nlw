import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import ensureAuthenticated from './middlewares/ensureAuthenticated';

import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/users', UsersController.create);

routes.post('/sessions', SessionsController.create);

routes.use(ensureAuthenticated);

routes.get('/orphanages/:id', OrphanagesController.show);
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
