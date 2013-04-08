/* global describe, it */

var assert = require("assert");
var stream = require("stream");
var concat = require("concat-stream");

var lazyStream = require("./index");

describe("lazy readable stream", function() {

    it("streams file contents after 100ms", function(done) {
        var created = Date.now();
        var s = lazyStream(__dirname + "/data.txt");
        s.pipe(concat(function(err, data) {
            if (err) throw err;
            var diff = Date.now() - created;
            assert(diff > 99, "file was streamed too early!");
            assert.equal(data, "hello world\n");
            done();
        }));


    });

});
