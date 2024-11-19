const express = require('express');
const WebSocket = require('ws');
const app = express();
const logger = require('./middleware/logger');
const sequelize = require('./startup/db');
const websocketService = require('./services/websocketService');
require('express-async-errors');
require('./startup/logging')(app);
require('./startup/routes')(app)

sequelize.sync();

const wss = new WebSocket.Server({ port: 8081 });

websocketService.init(wss);

const port = process.env.PORT || 3000;
app.listen(port);