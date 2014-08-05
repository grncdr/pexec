# pexec

A simple promisified wrapper around node cores `child_process.exec`.

## Synopsis

```javascript
var assert = require('assert');
var exec = require('./');

exec('echo $neato', {env: {neato: 'radical'}}).then(function (result) {
  assert.deepEqual(result, {
    stdout: 'radical\n',
    stderr: '',
  });
}).done();

exec('non-existant-command').then(
  // success callback is never called
  function () { assert(false); },
  // errors will have code, stdout, and stderr properties
  function (err) { assert(err.code && err.stderr) }
).done();
```

## License

MIT
