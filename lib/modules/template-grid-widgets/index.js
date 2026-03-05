module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Advanced Grid',
	addFields: [
		{
			name: 'hideWidget',
			label: 'Hide Widget',
			type: 'boolean',
			def: false
		},
		{
			name: 'gridFlow',
			label: 'Grid Flow',
			type: 'select',
			def: 'row',
			choices: [
				{ label: 'Column', value: 'row', showFields: ['gridColumns'] },
				{ label: 'Row', value: 'col', showFields: ['gridRows'] }
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
			name: 'items',
			label: 'Items',
			type: 'array',
			schema: [
				{
					name: 'mainArea',
					label: 'Body Content',
					type: 'area',
					options: {
						widgets: require('../helpers/lib/areas.js').allWidgets
					}
				},
				{
					name: 'bodyBackgroundColor',
					label: 'Body Background Color',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').backgroundColor
				},
				{
					name: 'borderWidth',
					label: 'Border Width',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').borderWidth
				},
				{
					name: 'borderColor',
					label: 'Border Color',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').borderColor
				},
				{
					name: 'borderRadius',
					label: 'Border Radius',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').borderRadius
				},
				{
					name: 'header',
					label: 'Enable Header',
					type: 'boolean',
					style: 'radio',
					def: false,
					choices: [
						{ value: true, showFields: ['headerArea', 'headerBackgroundColor'] },
						{ value: false, showFields: [] }
					]
				},
				{
					name: 'headerArea',
					label: 'Header Content',
					type: 'area',
					options: {
						widgets: require('../helpers/lib/areas.js').allWidgets
					}
				},
				{
					name: 'headerBackgroundColor',
					label: 'Header Background Color',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').backgroundColor
				},
				{
					name: 'footer',
					label: 'Enable Footer',
					type: 'boolean',
					style: 'radio',
					def: false,
					choices: [
						{ value: true, showFields: ['footerArea', 'footerBackgroundColor'] },
						{ value: false, showFields: [] }
					]
				},
				{
					name: 'footerArea',
					label: 'Footer Content',
					type: 'area',
					options: {
						widgets: require('../helpers/lib/areas.js').allWidgets
					}
				},
				{
					name: 'footerBackgroundColor',
					label: 'Footer Background Color',
					type: 'select',
					def: '',
					choices: require('../helpers/lib/styles.js').backgroundColor
				},
			],
		}
	],
	arrangeFields: [
		{
			name: 'items',
			label: 'Items',
			fields: ['hideWidget', 'items']
		},
		{
			name: 'layout',
			label: 'Layout',
			fields: ['gridFlow', 'gridRows', 'gridColumns']
		}
	]
}
