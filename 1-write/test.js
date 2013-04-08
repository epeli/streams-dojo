/* global describe, it */

var assert = require("assert");
var stream = require("stream");
var concat = require("concat-stream");

var helloWriter = require("./index");

describe("hello world writer", function() {
    it("writes 'hello world' to a writeable stream", function(done) {
        var pt = new stream.PassThrough();

        pt.pipe(concat(function(err, data) {
            assert.equal(data, "hello world");
            done();
        }));

        helloWriter(pt);
    });
});
