/* global describe, it */

var assert = require("assert");
var jsonWriteStream = require("./index");

describe("json write stream", function() {

    it("parses single json", function(done){
        var s = jsonWriteStream();

        s.on("json", function(json) {
            assert.deepEqual(json, { foo: 1 });
            done();
        });

        s.end('{ "foo": 1 }\n');

    });

    it("parses json from broken chunks", function(done){
        var s = jsonWriteStream();

        s.on("json", function(json) {
            assert.deepEqual(json, { foo: 1 });
            done();
        });

        s.write('{ "foo');
        s.end('": 1 }\n');

    });
});


