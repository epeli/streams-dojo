// http://nodejs.org/api/stream.html#stream_readable_read_size_1
// http://nodejs.org/api/stream.html#stream_event_end

/**
 * Read the readable stream to a single string and return it with the callback
 * 
 * @param {stream.Readable}
 * @param {Function} node.js style callback to be called with concatenated
 * string: cb(null, string);
 **/
module.exports = function(readable, cb) {

    var buffer = "";
    function read() {
        var s = readable.read();
        if (s === null) {
            return;
        }
        else {
            buffer += s.toString();
        }
        read();
    }
    readable.on("readable", read);
    readable.on("end", function() {
        cb(null, buffer);
    });

    read();
};
