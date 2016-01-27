'use strict';

const express = require('express');

let app = express();
app.express = express;
app.disable('x-powered-by');
app.listen(process.env.PORT);

module.exports = app;
