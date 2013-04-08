
// http://nodejs.org/api/stream.html#stream_event_end
// http://nodejs.org/api/stream.html#stream_writable_end_chunk_encoding_callback

/**
 * @param {stream.Writable}
 **/
module.exports = function(writeable) {
    writeable.write("hello world");
    writeable.end();
};
