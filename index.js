const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { version } = require('./package.json');
const environment = process.env.APP_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`Hello from Demo App! Environment: ${environment} | Version: ${version}`);
});

app.listen(port, () => {
  console.log(`[${environment.toUpperCase()}] App listening on port ${port} - Version: ${version}`);
});
