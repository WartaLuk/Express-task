const express = require('express');
const path = require('path');

const app = express();

app.use('/admin', (req, res, next) => {
  if(isAdmin()) next();
  else res.send('Go away!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/cart.html'));
});

app.get('/admin/products', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/admin/products.html'));
});

app.get('/admin/payments', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/admin/payments.html'));
});