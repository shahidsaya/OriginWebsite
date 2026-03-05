module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Slider Inner Promo',
	addFields: [
		{
			name: '_backgroundImage',
			type: 'joinByOne',
			withType: 'apostrophe-image',
			label: 'Background Image'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'string'
			/*type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}*/
		},
		{
			name: 'subtitle',
			label: 'Subtitle',
			type: 'string'
			/*type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}*/
		}
	]
}
