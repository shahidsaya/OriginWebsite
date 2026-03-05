module.exports = {
	extend: 'apostrophe-pieces-widgets',
	label: 'News & Announcements Posts',
	construct: function (self, options) {
		// https://docs.apostrophecms.org/advanced-topics/how-apostrophe-handles-requests.html#widget-loaders
		// load tag pieces data from the DB and make available in the widget
		const superLoad = self.load
		self.load = (req, widgets, callback) => {
			return superLoad(req, widgets, async (err) => {
				try {
					if (err) {
						return callback(err)
					}
					return callback(null)
				} catch (e) {
					console.error(e)
				}
			})
		}
	}
}
