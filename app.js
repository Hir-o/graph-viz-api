const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const sequelize = require('./startup/db');
require('express-async-errors');
require('./startup/logging')(app);
require('./startup/routes')(app)

sequelize.sync().then(async() => {
    console.log('Database synced!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));