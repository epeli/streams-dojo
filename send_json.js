
var jsonstream= require("./4-readable/index");

var stream = jsonstream();
stream.pipe(process.stdout);

stream.writeJSON({ foo: "foo\nbar"});
