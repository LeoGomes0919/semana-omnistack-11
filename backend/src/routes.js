const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/list/ongs', OngController.list);
routes.post('/create/ongs', OngController.create);

routes.post('/create/incidents', IncidentController.create);
routes.get('/list/incidents', IncidentController.list);
routes.delete('/delete/incidents/:id', IncidentController.delete);

module.exports = routes;