# WORK THREADS

Node.js has a single-threaded event loop by default.

The main thread can delegate CPU-Intensive tasks to worker threads, allowing the worker thread to remain responsive and handle other requests.

```text
Worker threads work as separate JavaScript execution contexts within the same Node.js process.
```

Worker Threads allows:
    - Offload CPU-bound tasks: Free the main thread for other tasks
    - Achieve Parallelism: Execute tasks concurrently. Faster performance.
    - Share data efficiently: Avoid the overhead of copying data between processes.

Worker threads share memory. So data structures like `ArrayBuffer` or `SharedArrayBuffer` are recommended for large data exchanges to avoid unnecessary copying.

## Important

1. Worker Threads have some overhead. Consider its benefit vs cost.
2. Use synchronization mechanisms to ensure data integrity.
3. Worker Threads add complexity.
