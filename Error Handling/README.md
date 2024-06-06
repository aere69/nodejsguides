# ERROR HANDLING IN Node.js

## ERROR TYPES

1. Synchronous Errors

    Occur during the execution of synchronous code. Can be caught using try-catch blocks.

2. Asynchronous Errors

    Occur during the execution of asynchronous code:
    - callbacks
    - promises
    - async/await functions.

3. Operational Errors

    Runtime problems that the program is expected to handle (e.g., failing to connect to a database).

4. Programmer Errors

    Bugs in the program (e.g., type errors, assertion failures).
    
    These should be caught and handled appart from operational errors.

## SYNCHRONOUS ERROR HANDLING

For synchronous error handling use try-catch blocks:

```js
try {
  // Synchronous code that might throw an error
  let result = someFunction();
} catch (error) {
  console.error('An error occurred:', error.message);
  // Handle the error
}
```

## ASYNCHRONOUS ERROR HANDLING

### CALLBACKS

In callback-based asynchronous code, errors are usually the first argument in the callback function:

```js
const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error('An error occurred:', err.message);
    // Handle the error
    return;
  }
  // Process the data
});
```

### PROMISES

Promises handle asynchronous errors using .catch():

```js
const fs = require('fs').promises;

fs.readFile('/path/to/file')
  .then(data => {
    // Process the data
  })
  .catch(err => {
    console.error('An error occurred:', err.message);
    // Handle the error
  });
  ```

### ASYNC/AWAIT

Async/await syntax allows for a more synchronous style of error handling in asynchronous code:

```js
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('/path/to/file');
    // Process the data
  } catch (err) {
    console.error('An error occurred:', err.message);
    // Handle the error
  }
}

readFile();
```

## CENTRALIZED ERROR HANDLING

Centralized error handling can help manage errors more effectively in larger applications.

This often involves middleware in Express.js applications.

### Express.js Middleware

Express.js provides a mechanism for handling errors via middleware. This middleware should be the last in the stack:

```js
const express = require('express');

const app = express();

// Define routes and other middleware
app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Advanced Techniques

### Custom Error Classes

Custom error classes can help distinguish between different types of errors and make error handling more granular:

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage
try {
  throw new AppError('Custom error message', 400);
} catch (error) {
  if (error instanceof AppError) {
    console.error(`AppError: ${error.message} (status: ${error.statusCode})`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
```

### Error Logging

Implement robust error logging to monitor and diagnose issues.

Tools like Winston or Bunyan can help with logging:

```js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});

// Usage
try {
  // Code that might throw an error
  throw new Error('Something went wrong');
} catch (error) {
  logger.error(error.message, { stack: error.stack });
}
```

### Global Error Handling

Handling uncaught exceptions and unhandled promise rejections ensures that no errors slip through unnoticed:

```js
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Perform cleanup and exit process if necessary
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform cleanup and exit process if necessary
});
```

## BEST PRACTICES

- **Fail Fast:** Detect and handle errors as early as possible.

- **Graceful Shutdown:** Ensure your application can shut down gracefully in the event of a critical error.

- **Meaningful Error Messages:** Provide clear and actionable error messages.

- **Avoid Silent Failures:** Always log or handle errors to avoid silent failures.

- **Test Error Scenarios:** Write tests to cover potential error scenarios and ensure your error handling works as expected.

[Source](https://dev.to/amritak27/advanced-error-handling-in-nodejs-1ep8)

