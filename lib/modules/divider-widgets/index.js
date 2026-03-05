module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Divider',
	addFields: [
		{
			name: 'width',
			label: 'Width',
			type: 'select',
			def: 'full',
			choices: require('../helpers/lib/styles.js').width
		},
		{
			name: 'height',
			label: 'Height',
			type: 'select',
			def: 'h-px',
			choices: [
				{ label: '1px', value: 'h-px' },
				{ label: '2px', value: 'h-2px' },
				{ label: '3px', value: 'h-3px' },
				{ label: '4px', value: 'h-4px' },
				{ label: '5px', value: 'h-5px' },
				{ label: '6px', value: 'h-6px' }
			]
		},
		{
			name: 'backgroundColor',
			label: 'Background Color',
			type: 'select',
			def: 'black',
			choices: require('../helpers/lib/styles.js').backgroundColor
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
