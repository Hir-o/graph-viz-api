const bodyParser = require('body-parser');
const helmet = require('helmet');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(helmet());
}