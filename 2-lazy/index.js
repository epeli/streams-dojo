var stream = require("stream");
var fs = require("fs");

// http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
// http://nodejs.org/api/stream.html#stream_class_stream_passthrough

/**
 * @param {String} path to a file
 * @return {stream.Readable}
 **/
module.exports = function(file) {
	var striimi = new stream.PassThrough();
	setTimeout(function() {
      fs.createReadStream(file).pipe(striimi);
	}, 100);
	return striimi;
};
