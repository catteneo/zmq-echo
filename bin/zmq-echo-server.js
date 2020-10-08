#!/usr/bin/env node

var zmq = require("zeromq");

var s = zmq.createSocket("rep");
s.bind(process.argv[2]);
s.on("message", function(data) {
    process.stdout.write(data.toString());
    //var json = "{\"data\":[{\"sensor_id\":1,\"sensor_value\":\"3.5\"},{\"sensor_id\":3,\"sensor_value\":\"12.5\"}],\"message_id\":\"1\",\"sensingbox_id\":\"1\",\"timestamp\":\"1602069387000\"}";
    s.send(json);
});
