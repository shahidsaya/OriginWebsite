module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Journey',
	// contextualOnly: true,
	addFields: [
		{
			label: 'Title',
			name: 'area1',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		},
		{
			label: "Main Content",
			name: 'area2',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		},
		{
			label: 'Call to Action',
			name: 'area3',
			type: 'area',
			options: {
				widgets: { 'button': {} }
			}
		},
		{
			label: 'Image',
			name: 'area4',
			type: 'area',
			options: {
				widgets: {'apostrophe-images': {template: 'round'}}
			}
		},
		{
			label: "Item Number",
			name: 'area5',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		}
	],
	arrangeFields: [
		{
			name: 'content',
			label: 'Content',
			fields: ['area4', 'area5', 'area1', 'area2', 'area3' ]
		},
	],
};
