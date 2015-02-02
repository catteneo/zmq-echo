#!/usr/bin/env node

var zmq = require("zmq");

var s = zmq.createSocket("rep");
s.bind(process.argv[2]);
s.on("message", function(data) {
    s.send(data);
});
