module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Resource Cards',
	addFields: [
		{
			name: '_resourcePage',
			label: 'Resource Page',
			type: 'joinByArray',
			withType: 'apostrophe-page',
			filters: {
				projection: {
					title: 1,
					_url: 1,
					icon: 1,
				},
				areas: [ 'icon' ]
			}
		},
	]
}
