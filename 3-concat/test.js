/* global describe, it */
var assert = require("assert");
var fs = require("fs");
var stream = require("stream");

var concat = require("./index");

describe("stream concat", function() {

    it("can concat readable stream into a string", function(done) {

        var readable = fs.createReadStream(__dirname + "/data.txt");

        concat(readable, function(err, string) {
            assert.equal(string, "hello world\n");
            done();
        });
    });


    it("can handle streams in multiple parts", function(done) {

        var pt = new stream.PassThrough();

        concat(pt, function(err, string) {
            assert.equal(string, "hello world");
            done();
        });

        pt.write("hello");

        // Simulate slow disk i/o with setTimeout
        setTimeout(function() {
            pt.write(" world");
            pt.end();
        }, 100);

    });

});
