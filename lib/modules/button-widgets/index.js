const columnWidgets = require('../helpers/lib/areas.js').allWidgets;

module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Button',
	addFields: [
		{
			name: 'buttonText',
			label: 'Button Text',
			type: 'string'
		},
		{
			name: 'textColor',
			label: 'Text Color',
			type: 'select',
			def: 'black',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'backgroundColor',
			label: 'Background Color',
			type: 'select',
			def: 'white',
			choices: require('../helpers/lib/styles.js').backgroundColor
		},
		{
			name: 'borderColor',
			label: 'Border Color',
			type: 'select',
			def: 'secondary',
			choices: require('../helpers/lib/styles.js').borderColor
		},
		{
			name: 'width',
			label: 'Width',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').width
		},
		{
			name: 'marginBottom',
			type: 'select',
			label: 'Margin Bottom',
			def: 'none',
			choices: require('../helpers/lib/styles.js').marginBottom
		},
		{
			name: 'align',
			label: 'Align',
			type: 'select',
			def: 'center',
			choices: [
				{ label: 'Left', value: 'start' },
				{ label: 'Center', value: 'center' },
				{ label: 'Right', value: 'end' }
			]
		},
		{
			name: 'enableCustomStyling',
			label: 'Enable Custom Style',
			help: 'Essential - strip only style properties above; All - strip all style properties',
			type: 'select',
			def: 'disabled',
			choices: [
				{ label: 'Disabled', value: 'disabled' },
				{ label: 'Essential', value: 'essential', showFields: ['customStyling'] },
				{ label: 'All', value: 'all', showFields: ['customStyling'] }
			]
		},
		{
			name: 'customStyling',
			label: 'Custom Style',
			help: 'Use Tailwind CSS classes',
			type: 'string',
		},
		{
			name: 'buttonType',
			label: 'Button Type',
			type: 'select',
			def: 'link',
			choices: [
				{ label: 'Link', value: 'link', showFields: ['_linkPage', 'linkTarget'] },
				{ label: 'External Link', value: 'externalLink', showFields: ['externalLink', 'linkTarget'] },
				{ label: 'Download', value: 'download', showFields: ['downloadUrl', 'linkTarget'] },
				{ label: 'File Download', value: 'file', showFields: ['_file', 'linkTarget'] },
				{ label: 'Form button', value: 'button' }
			]
		},
		{
			name: 'linkTarget',
			label: 'Link Target',
			type: 'select',
			def: '_self',
			choices: [
				{ label: 'Same Page', value: '_self' },
				{ label: 'New Page', value: '_blank' }
			]
		},
		{
			name: '_linkPage',
			label: 'Link Page',
			type: 'joinByOne',
			withType: 'apostrophe-page',
			filters: {
				projection: {
					title: 1,
					_url: 1
				}
			}
		},
		{
			name: 'externalLink',
			label: 'External Link URL',
			type: 'string'
		},
		{
			name: 'downloadUrl',
			label: 'Download URL',
			type: 'url'
		},
		{
			name: '_file',
			type: 'joinByOne',
			withType: 'apostrophe-file',
			label: 'File'
		},
	],
	arrangeFields: [
		{
			name: 'content',
			label: 'Content',
			fields: ['buttonText']
		},
		{
			name: 'style',
			label: 'Style',
			fields: ['textColor', 'backgroundColor', 'borderColor', 'align', 'enableCustomStyling', 'customStyling', 'marginBottom', 'width']
		},
		{
			name: 'link',
			label: 'Link',
			fields: ['buttonType', '_linkPage', 'externalLink', 'downloadUrl', 'linkTarget']
		},
	],
}
