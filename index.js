'use strict';
var Promise = require('bluebird');
var cp = require('child_process');

module.exports = function (cmd, opts) {
  opts = opts || {};
  return new Promise(function (resolve, reject) {
    cp.exec(cmd, opts, function (err, stdout, stderr) {
      if (err) {
        err.stdout = stdout;
        err.stderr = stderr;
        reject(err);
      } else {
        resolve({
          stdout: stdout,
          stderr: stderr
        });
      }
    });
  });
}
