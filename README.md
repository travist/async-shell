# async-shell
A super simple async shell for Node.js

## Installation
You can install this package using NPM.

```
npm install async-shell
```

## Usage
You can use this library in Node.js within an async/await function.

```
const shell = require('async-shell');

// Must be within an async function.
(async () => {
    const output = await shell('git status');
    console.log(output);
})();
```
