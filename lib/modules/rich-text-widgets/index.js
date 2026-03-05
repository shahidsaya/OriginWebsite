module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Rich Text',
	contextualOnly: true,
	addFields: [
		{
			name: 'text',
			label: 'Text',
			type: 'singleton',
			widgetType: 'apostrophe-rich-text',
			options: {
				toolbar: require('../helpers/lib/areas.js').baseToolbar,
				styles: require('../helpers/lib/areas.js').baseStyles
			}
		},
	]
}
