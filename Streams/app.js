const fs = require('fs');

const readableStream = fs.createReadStream('large_file.txt');

readableStream.on('data', (chunk) => {
  console.log('Received data chunk:', chunk.toString());
});

readableStream.on('end', () => {
  console.log('Finished reading file');
});