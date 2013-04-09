
var stream = require("stream");
var util = require("util");

// http://nodejs.org/api/stream.html#stream_transform_transform_chunk_encoding_callback

function Upcase(){
    stream.Transform.call(this);
}

util.inherits(Upcase, stream.Transform);

Upcase.prototype._transform = function(chunk, encoding, cb) {
};

module.exports = function() {
    return new Upcase();
};
