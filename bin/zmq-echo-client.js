#!/usr/bin/env node

var zmq = require("zeromq");

var s = zmq.createSocket("req");
s.connect(process.argv[2]);

s.on("message", function(data) {
    process.stdout.write(data.toString());
});

process.stdin.on("data", function(data) {
    s.send(data);
});
