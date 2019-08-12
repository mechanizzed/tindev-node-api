const express = require('express');
const routes = express.Router();

routes.post('/devs', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
