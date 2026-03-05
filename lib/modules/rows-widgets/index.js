module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Rows',
	addFields: [
		{
			name: 'config',
			label: 'Rows Configuration',
			type: 'select',
			def: '2',
			choices: [
				{ label: 'Two Rows', value: 2, showFields: ['area1', 'area2'] },
				{ label: 'Three Rows', value: 3, showFields: ['area1', 'area2', 'area3'] },
				{ label: 'Four Rows', value: 4, showFields: ['area1', 'area2', 'area3', 'area4'] },
			]
		},
		{
			name: 'gap',
			label: 'Gap',
			type: 'select',
			def: '2',
			choices: require('../helpers/lib/styles.js').gap
		},
    {
			name: 'area1',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			},
		},
		{
			name: 'area2',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			},
		},
		{
			name: 'area3',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
      },
		},
    {
      name: 'area4',
      type: 'area',
      options: {
        widgets: require('../helpers/lib/areas.js').allWidgets
      },
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
