'use strict';

const express = require('express');

const app = express();
app.disable('x-powered-by');
app.listen(process.env.PORT);

module.exports = { app, express };
