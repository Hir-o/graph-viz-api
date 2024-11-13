const express = require('express');
require('express-async-errors');
const app = express();
const logger = require('./middleware/logger');
require('./startup/logging')(app);
require('./startup/routes')(app)

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));