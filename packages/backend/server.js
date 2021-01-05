const http = require('http');
const { hostname } = require('os');
const app = require('./app');

const PORT = process.env.PORT ?? 5000;

const server = http.createServer(app);

server.listen(PORT, '127.0.0.1',
  () => { console.log(`Server is running! Port:${PORT}`); }
);