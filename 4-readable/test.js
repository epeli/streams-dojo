/* global describe, it */

var assert = require("assert");
var jsonReadStream = require("./index");
var concat = require("concat-stream");

describe("json read stream", function() {

    it("it serializes json messages to new line separeted strings", function(done){
        var s = jsonReadStream();

        s.pipe(concat(function(err, data) {
            assert.equal(data.toString(), '{"foo":1}\n{"bar":2}\n');
            done();
        }));

        s.writeJSON({ foo: 1 });
        s.writeJSON({ bar: 2 });
        s.done();

    });
});


