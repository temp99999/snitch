var express = require('express')
var exec = require("child_process").exec;

var app = express()
var port = 8000;

app.get('/', function (req, res) {
    exec("ls -la", (error, stdout, stderr) => {
        res.send({
            env: process.env,
            stdout: stdout,
            stderr: stderr
        })
    });
})

app.listen(port, () => {
    console.log('Server running');
});
  