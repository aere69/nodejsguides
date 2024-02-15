const cluster = require('cluster');

if (cluster.isMaster) {
  // Master process
  // Get number of logical CPU cores.
  const numWorkers = require('os').cpus().length;

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('worker %d died', worker.process.pid);
  });
} else {
  // Worker process
  // Your application logic here
  app.listen(3000);
}