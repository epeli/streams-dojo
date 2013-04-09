var stream = require("stream");
var util = require("util");

// http://nodejs.org/api/stream.html#stream_readable_push_chunk
// http://nodejs.org/api/stream.html#stream_readable_read_size
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify

function JSONStringifyStream(){
    stream.Readable.call(this);
}

util.inherits(JSONStringifyStream, stream.Readable);

/**
 * Write json objects as new line (\n) separated strings
 * to a stream
 * 
 * @param {Object} any json serializable object
 **/
JSONStringifyStream.prototype.writeJSON = function(msg) {
    this.push(JSON.stringify(msg) + "\n");
};

/**
 * Called when done writing json messages
 **/
JSONStringifyStream.prototype.done = function() {
    this.push(null);
};

JSONStringifyStream.prototype._read = function(size) {
};

module.exports = function() {
    return new JSONStringifyStream();
};

