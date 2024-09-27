const path = require('path');

// path module is a core module in Node.js and provides utilities for working with file and directory paths. It can be accessed using:

console.log(path.basename(__filename)); // Returns the base file name
console.log(path.dirname(__filename)); // Returns the directory name
console.log(path.extname(__filename)); // Returns the file extension
console.log(path.parse(__filename)); // Returns an object with the parsed path
console.log(path.join(__dirname, 'test', 'hello.html')); // Concatenates the paths
