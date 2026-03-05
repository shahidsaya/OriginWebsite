module.exports = {
	extend: 'apostrophe-custom-pages',
	name: 'redirect',
	label: 'Redirect Page',
	searchable: false,
	beforeConstruct: function(self, options) {
		options.addFields = [
			{
				name: 'redirectLinkType',
				label: 'Redirect Link Type',
				type: 'select',
				def: 'pageLink',
				choices: [
					{
						label: 'Page Link',
						value: 'pageLink',
						showFields: ['_redirectPage', 'queryStrings']
					},
					{
						label: 'External Link',
						value: 'externalLink',
						showFields: ['externalRedirect', 'externalRedirectTarget']
					}
				]
			},
			{
				name: '_redirectPage',
				label: 'Redirect Page',
				type: 'joinByOne',
				withType: 'apostrophe-page'
			},
			{
				name: 'queryStrings',
				label: 'URL Parameters / Query Strings',
				help: 'format: "?param1=value1?param2=value2#anchor',
				type: 'string'
			},
			{
				name: 'externalRedirect',
				label: 'External URL Redirect',
				type: 'string'
			},
			{
				name: 'externalRedirectTarget',
				label: 'External URL Redirect Target',
				type: 'select',
				def: '_self',
				choices: [
					{label: 'Same Window', value: '_self'},
					{label: 'New Window', value: '_blank'}
				]
			}
		]
	},
	construct: function(self, options) {

		self.pageServe = function(req, callback) {

			/*if (req.data.page._redirectPage) {
				console.log(req.data.page._redirectPage)
			}*/

			if(req.data.bestPage && req.data.bestPage.type && req.data.bestPage.type === options.name) {
				if(req.data.page.redirectLinkType === 'pageLink' && req.data.page._redirectPage && req.data.page._redirectPage._url) {
					req.redirect = req.data.page._redirectPage._url + req.data.page.redirectQueryStrings
				} else if(req.data.page.redirectLinkType === 'externalLink' && req.data.page.externalRedirect) {
					req.redirect = req.data.page.externalRedirect
				}
			}

			return callback(null)
		}

	}
}
