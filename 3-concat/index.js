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
	var data = '';
	readable.on('readable', function() {
		var jutut = readable.read();
		
		data += jutut;
		//cb(null, jutut);
	}).on('end', function() {
		cb(null, data);
	});
};
