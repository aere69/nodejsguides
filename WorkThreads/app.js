const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js', { data: { someData: 'to process'}});

worker.on('message', (message)=>{
    console.log('Received message from worker: %s', message);
})

worker.postMessage({anotherData: 'to send'});