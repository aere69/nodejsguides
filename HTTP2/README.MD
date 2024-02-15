# HTTP/2

Node.js’s http2 module tackles performance directly by offering built-in support for the efficient [HTTP/2 protocol](https://en.wikipedia.org/wiki/HTTP/2).

HTTP/2, the successor to HTTP/1.1, brings several performance enhancements:

- **Multiplexing:** Enables simultaneous sending and receiving of multiple requests and responses on a single connection, eliminating the head-of-line blocking issue plaguing HTTP/1.1.
- **Header compression:** Shrinks header size by compressing them, dramatically reducing data transmission overhead.
- **Server push:** Allows servers to proactively send resources to clients before they request them, potentially accelerating page load times.

## Features

- [Creating HTTP/2 servers](https://nodejs.org/api/http2.html#core-api): Use familiar Node.js server patterns with additional options for managing streams and server push functionality.
- [Handling HTTP/2 clients](https://nodejs.org/api/http2.html#client-side-example): Access client-side capabilities to connect to and interact with HTTP/2 servers.
- [Extensive API](https://nodejs.org/api/http2.html#core-api): Explore various methods and events to manage connections, streams, push mechanisms, and error handling.