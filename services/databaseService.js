const webSockedService = require('./websocketService');

async function pollGraphChanges(updatedGraphId){
    webSockedService.sendUpdateToClients(updatedGraphId);
}

module.exports = { pollGraphChanges }