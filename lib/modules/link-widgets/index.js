/* TODO Add External URL/Download URL options */
module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Link',
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
			name: 'showIcon',
			label: 'Show Icon',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'No', value: false },
				{ label: 'Yes', value: true, showFields: ['iconPosition', 'icon'] }
			]
		},
		{
			name: 'iconPosition',
			type: 'select',
			label: 'Icon Position',
			def: 'right',
			choices: [
				{ label: 'Left', value: 'left' },
				{ label: 'Right', value: 'right' }
			]
		},
		{
			name: 'icon',
			label: 'Icon',
			type: 'area',
			options: {
				widgets: {
					'icon': {}
				}
			}
		},
		{
			name: 'fontFamily',
			label: 'Font Family',
			type: 'select',
			def: 'secondary',
			choices: require('../helpers/lib/styles.js').fontFamily
		},
		{
			name: 'textColor',
			type: 'select',
			label: 'Text Color',
			def: 'black',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'textSize',
			type: 'select',
			label: 'Text Size',
			def: 'lg',
			choices: require('../helpers/lib/styles.js').textSize
		},
		{
			name: 'paddingTop',
			type: 'select',
			label: 'Padding Top',
			def: '2',
			choices: require('../helpers/lib/styles.js').paddingTop
		},
		{
			name: 'textWeight',
			label: 'Text Weight',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textWeight
		},
		{
			name: 'align',
			label: 'Align',
			type: 'select',
			def: 'left',
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
	],
	arrangeFields: [
		{
			name: 'content',
			label: 'Content',
			fields: ['text', 'showIcon', 'iconPosition', 'icon']
		},
		{
			name: 'style',
			label: 'Style',
			fields: ['fontFamily', 'textColor', 'textSize', 'textWeight', 'paddingTop', 'align', 'enableCustomStyling', 'customStyling']
		},
		{
			name: 'link',
			label: 'Link',
			fields: ['_linkPage']
		}
	],
}
