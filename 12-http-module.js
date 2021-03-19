// Node built-in modules
/*
 - OS
 - PATH
 - FS
 - HTTP
*/

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('welcome to our about page');
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/" >Back to Home page</a>
    `);
});

server.listen(5000);
