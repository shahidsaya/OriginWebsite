module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Columns',
	addFields: [
		{
			name: 'config',
			label: 'Column Configuration',
			type: 'select',
			def: 3,
			choices: [
				{ label: 'Two Columns (0.33 / 0.66)', value: 1 },
				{ label: 'Two Columns (1 / 1)', value: 2,showFields: ['last'] },
				{ label: 'Three Columns (1 / 1 / 1)', value: 3, showFields: ['area3'] },
				{ label: 'Two Columns (0.25 / 0.75)', value: 4 },
			]
		},
		{
			name: 'columnGap',
			label: 'Column Gap',
			type: 'select',
			def: 'md',
			choices: [
				{ label: 'Small', value: 'sm' },
				{ label: 'Medium', value: 'md' },
				{ label: 'Large', value: 'lg' }
			]
		},
		{
			name: 'verticalAlign',
			label: 'Vertical Align',
			type: 'select',
			def: 'top',
			choices: [
				{ label: 'Top', value: 'top' },
				{ label: 'Middle', value: 'middle' },
				{ label: 'Bottom', value: 'bottom' }
			]
		},
		{
			name: 'area1',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			},
		},
		{
			name: 'last',
			label: 'Displayed as the last one on mobile - (area 1)',
			type: 'boolean',
			def: false,
			choices: [
				{ label: 'Disabled', value: false },
				{ label: 'Enabled', value: true}
			]
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
		}
	]
}
