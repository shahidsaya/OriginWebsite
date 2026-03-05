module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Container',
	addFields: [
		{
			name: 'hideWidget',
			label: 'Hide Widget',
			type: 'boolean',
			style: 'radio',
			def: false
		},
		{
			name: 'sectionId',
			label: 'Container ID',
			help: 'Add an ID for anchor links',
			type: 'string',
		},
		{
			name: 'mainArea',
			label: 'Main Area',
			type: 'area',
			contextual: true,
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			}
		},
		{
			name: 'width',
			label: 'Width',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').width
		},
		{
			name: 'maxWidth',
			label: 'Max Width',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').maxWidth
		},
		{
			name: 'height',
			label: 'Height',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').height
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
			name: 'padding',
			label: 'Padding',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').padding
		},
		{
			name: 'textColor',
			label: 'Text Color',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'textSize',
			label: 'Text Size',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textSize
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
			name: 'backgroundColor',
			label: 'Background Color',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').backgroundColor
		},
		{
			name: 'showBackgroundImage',
			label: 'Background Image',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'Disabled', value: false },
				{ label: 'Enabled', value: true, showFields: ['_backgroundImage'] }
			]
		},
		{
			name: 'showTopRoundedCorner',
			label: 'Show Top Rounded Corner',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'Hide', value: false },
				{ label: 'Show', value: true }
			]
		},
		{
			name: 'showFlowerBackground',
			label: 'Show Flower Background',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'Hide', value: false },
				{ label: 'Show', value: true }
			]
		},
		{
			name: 'showBadge',
			label: 'Show Badge',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'Hide', value: false },
				{ label: 'Show', value: true }
			]
		},
		{
			name: '_backgroundImage',
			type: 'joinByOne',
			withType: 'apostrophe-image',
			label: 'Background Image'
		},
		{
			name: 'borderWidth',
			label: 'Border Width',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').borderWidth
		},
		{
			name: 'borderColor',
			label: 'Border Color',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').borderColor
		},
		{
			name: 'lineSpacing',
			label: 'Line Spacing',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').lineSpacing
		},
		{
			name: 'enableCustomStyling',
			label: 'Enable Custom Style',
			help: 'Base - custom style with properties above; Only Custom - Only custom style without properties above',
			type: 'select',
			def: 'disabled',
			choices: [
				{ label: 'Disabled', value: 'disabled' },
				{ label: 'Base', value: 'base', showFields: ['customStyling'] },
				{ label: 'Only Custom', value: 'onlyCustom', showFields: ['customStyling'] }
			]
		},
		{
			name: 'customStyling',
			label: 'Custom Style',
			help: 'Use Tailwind CSS classes',
			type: 'string',
		}
	]
}
