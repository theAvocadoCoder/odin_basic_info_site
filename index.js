const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  html = fs.readFileSync('./index.html');
  res.end(html);
});

server.listen(port, () => {
  console.log(`Running at port ${port}`);
});