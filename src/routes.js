const { Router } = require('express');
const PostControllers = require('./controllers/PostControllers');
const UserController = require('./controllers/UserControllers');

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/posts', PostControllers.index);

routes.post('/users/:user_id/posts', PostControllers.store);


module.exports = routes;
