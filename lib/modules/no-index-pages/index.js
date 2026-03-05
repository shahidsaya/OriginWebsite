module.exports = {
	extend: 'apostrophe-pieces-pages',
	name: 'no-index-pages',
	label: 'No Index Page',
	construct: function (self, options) {
		self.beforeIndex = function (req, callback) {
			req.notFound = true;
			return callback(null);
		};
	}
}
