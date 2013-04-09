
var stream = require("stream");
var util = require("util");

// http://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse
// http://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2

/**
 * Writeable stream which emits 'json' events when it gets full json strings
 * written to it.
 **/
function JSONParseStream(){
    stream.Writable.call(this);
    this.whole = '';
}

util.inherits(JSONParseStream, stream.Writable);

JSONParseStream.prototype._write =
	function(chunk, encoding, cb)
{
	this.whole += chunk.toString();
		if (this.whole.indexOf('\n') > -1) {
			var obj = JSON.parse(this.whole);
		//cb(null, obj);
		this.emit('json',obj);
	}
	cb(null);

};

module.exports = function() {
    return new JSONParseStream();
};

