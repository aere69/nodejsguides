# STREAMS

Streams represent continuous sequences of data chunks delivered over time. 
Node.js provides various [stream types](https://nodejs.org/api/stream.html#types-of-streams), each catering to different use cases:

- **Readable Streams:** Emit data chunks for consumption, ideal for reading files, network connections, or user input.
- **Writable Streams:** Allow writing data chunks, perfect for writing to files, network connections, or databases.
- **Duplex Streams:** Combine reading and writing capabilities, useful for bidirectional communication like sockets or pipes.
- **Transform Streams:** Modify data as it flows through, enabling encryption, compression, or data manipulation.

## Advantages

> Streams shine in scenarios where large datasets or continuous data flows are involved.

- **Memory efficiency:** They handle data in chunks, avoiding loading the entire dataset into memory at once.
- **Non-blocking nature:** They don’t block the main thread, allowing your application to remain responsive while processing data.
- **Flexibility:** Different stream types cater to various data handling needs.
