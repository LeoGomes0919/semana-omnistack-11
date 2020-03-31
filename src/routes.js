const express = require('express');

const rouets = express.Router();

rouets.get('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Leonardo Gomes"
  });
});

module.exports = rouets;