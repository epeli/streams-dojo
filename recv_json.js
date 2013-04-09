
var readjson = require("./5-writeable/index");

var stream = readjson();

process.stdin.resume();

process.stdin.pipe(stream);

stream.on("json", function(json) {
    console.log("type", typeof json);
    console.log("GOT", json);
});
