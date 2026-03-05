module.exports = {
	beforeConstruct: function(self, options) {
		options.addFields = [{
			name: 'icon',
			label: 'Icon',
			type: 'singleton',
			widgetType: 'apostrophe-images',
			options:{
				limit: 1
			},
			controls:{
				movable:false
			},
			image: true
		}].concat(options.addFields || []);

		options.arrangeFields = [
			{
				name: 'basics',
				label: 'Basics',
				fields: [
					'title',
					'slug',
					'type',
					'icon',
					'redirectLinkType',
					'_redirectPage',
					'redirectQueryStrings',
					'externalRedirect',
					'externalRedirectTarget',
					'linkType',
					'orphan',
					'published',
					'tags',
					'trash'
				]
			}
		].concat(options.arrangeFields || []);
	},

	construct: function(self, options) {
	}
}
