require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const routes = {
  index: require(path.join(__dirname, 'routes', 'index')),
  api: require(path.join(__dirname, 'routes', 'api'))
};

app.use(routes.api);
app.use(routes.index);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
