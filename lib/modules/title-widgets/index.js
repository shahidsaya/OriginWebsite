module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Title',
	addFields: [
		{
			name: 'title',
			label: 'Title',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
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
			name: 'size',
			type: 'select',
			label: 'Text Size',
			def: 'large',
			choices: [
				{ label: 'small', value: 'small' },
				{ label: 'large', value: 'large' }
			]
		},
		{
			name: 'fontFamily',
			label: 'Font Family',
			type: 'select',
			def: 'primary',
			choices: require('../helpers/lib/styles.js').fontFamily
		},
		{
			name: 'titleColor',
			type: 'select',
			label: 'Text Color',
			def: 'primary',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'textWeight',
			label: 'Text Weight',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textWeight
		},
		{
			name: 'textAlign',
			label: 'Text Align',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textAlign
		},
		{
			name: 'paddingTop',
			label: 'Padding Top',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').paddingTop
		},
		{
			name: 'paddingBottom',
			label: 'Padding Bottom',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').paddingBottom
		},
		{
			name: 'verticalAlign',
			label: 'Vertical Align',
			type: 'select',
			def: 'items-center',
			choices: [
				{ label: 'Top', value: 'items-start' },
				{ label: 'Middle', value: 'items-center' },
				{ label: 'Bottom', value: 'items-end' }
			]
		},
	],
	arrangeFields: [
		{
			name: 'content',
			label: 'Content',
			fields: ['title', 'icon']
		},
		{
			name: 'style',
			label: 'Style',
			fields: ['size', 'titleColor', 'fontFamily', 'textWeight', 'textAlign', 'verticalAlign', 'paddingTop', 'paddingBottom']
		}
	],
}
