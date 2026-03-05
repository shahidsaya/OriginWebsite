module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Grid',
	addFields: [
		{
			name: 'gridFlow',
			label: 'Grid Flow',
			type: 'select',
			def: 'row',
			choices: [
				{ label: 'Column', value: 'row', showFields: ['gridColumns'] },
				{ label: 'Row', value: 'column', showFields: ['gridRows'] }
			]
		},
		{
			name: 'gridRows',
			label: 'Rows',
			type: 'select',
			def: '2',
			choices: require('../helpers/lib/styles.js').gridRows
		},
		{
			name: 'gridColumns',
			label: 'Columns',
			type: 'select',
			def: '2',
			choices: require('../helpers/lib/styles.js').gridColumns
		},
		{
			name: 'gap',
			label: 'Gap',
			type: 'select',
			def: '2',
			choices: require('../helpers/lib/styles.js').gap
		},
		{
			name: 'items',
			label: 'Items',
			type: 'array',
			schema: [
				{
					name: 'mainArea',
					label: 'Item Content',
					type: 'area',
					blockLevelControls: true,
					options: {
						widgets: require('../helpers/lib/areas.js').allWidgets
					}
				}
			]
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
