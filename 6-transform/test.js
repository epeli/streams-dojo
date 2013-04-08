/* global describe, it */

var assert = require("assert");
var fs = require("fs");
var concat = require("concat-stream");

var upcase = require("./index");

describe("upcase transformer", function() {

    it("transforms string to upper case", function(done){
        var s = upcase();
        s.pipe(concat(function(err, data) {
            if (err) throw err;

            assert.equal(data.toString(), "HELLO WORLD\n");

            done();
        }));

        fs.createReadStream(__dirname + "/data.txt").pipe(s);
    });
});
