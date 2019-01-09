#!/usr/bin/env node

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(error); console.log(stderr); console.log(stdout); }
exec("sudo http-server -a 35.227.65.167 -p 80", puts);

