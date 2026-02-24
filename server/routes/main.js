const express = require('express');

const routes = express.Router();

routes.get('', (req, res) => {
  const locals = {
    title: 'Blog',
    description: 'Simple Blog site with Express, Nodejs and mongodb',
  };
  res.render('index', locals);
});

routes.get('/about', (req, res) => {
  res.render('about');
});

module.exports = routes;
