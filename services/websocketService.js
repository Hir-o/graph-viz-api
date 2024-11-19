const WebSocket = require('ws');
const logger = require('../middleware/logger');

let clients = [];

function init(wss) {
    wss.on('connection', ws => {
      logger.info('Client connected');
      clients.push(ws);
  
      ws.on('message', (data) => {
        logger.info('Received message:', data);
      });
  
      ws.on('close', () => {
        clients = clients.filter(client => client !== ws);
      });
    });
}

function sendUpdateToClients(graphId){
    clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN){
            client.send(JSON.stringify({ graphId }));
        }
    });
}

module.exports = { init, sendUpdateToClients };