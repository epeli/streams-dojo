
var jsonstream= require("./index");

var stream = jsonstream();
stream.pipe(process.stdout);

stream.writeJSON({ foo: "foo\nbar"});
