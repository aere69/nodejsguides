const http2 = require('http2');

const server = http2.createServer();

server.on('stream', (stream, headers) => {
  const path = headers[':path'];

  if (path === '/') {
    stream.respond({
      'status': 200,
      'content-type': 'text/plain',
    });
    stream.end('Hello from HTTP/2 server!');
  } else {
    stream.respond({
      'status': 404,
      'content-type': 'text/plain',
    });
    stream.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});