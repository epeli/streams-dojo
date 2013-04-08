
var stream = require("stream");
var fs = require("fs");

// http://nodejs.org/api/stream.html#stream_class_stream_passthrough

/**
 * @param {String} path to a file
 * @return {stream.Readable}
 **/
module.exports = function(file) {

    var pt = stream.PassThrough();

    setTimeout(function() {
        fs.createReadStream(file).pipe(pt);
    }, 110);

    return pt;
};
