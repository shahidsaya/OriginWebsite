module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Small CTA',
	addFields: [
    {
			name: 'text',
			label: 'Text',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		},
    {
      name: '_backgroundImage',
      type: 'joinByOne',
      withType: 'apostrophe-image',
      label: 'Background Image'
    },
    {
      name: 'url',
      label: 'URL',
      type: 'url'
    }
	]
}
