const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/list/ongs', OngController.list);
routes.post('/create/ongs', OngController.create);

routes.get('/profile', ProfileController.list);

routes.post('/create/incidents', IncidentController.create);
routes.get('/list/incidents', IncidentController.list);
routes.delete('/delete/incidents/:id', IncidentController.delete);

module.exports = routes;