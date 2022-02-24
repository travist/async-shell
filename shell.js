const { spawn } = require('child_process');
const path = require('path');
const shell = async function (command, directory) {
  return new Promise((resolve, reject) => {
    let error = '';
    let output = '';
    const options = {};
    if (directory) {
        options.cwd = directory;
    }
    const _eval = spawn('sh', ['-c', command], options);
    _eval.stdout.on('data', (data) => {
      console.log(data);
      output += data;
    });
    _eval.stderr.on('data', (data) => {
      error += data;
    });
    _eval.on('close', (code) => {
      if (code) {
        reject(error);
      } else {
        resolve(output);
      }
    });
  });
};
module.exports = shell;
