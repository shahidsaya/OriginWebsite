module.exports = {
	extend: 'apostrophe-widgets',
	label: 'List',
	addFields: [
		{
			name: 'listItems',
			label: 'List Items',
			type: 'array',
			schema: [
				{
					name: 'text',
					label: 'Item Text',
					type: 'area',
					options: {
						widgets: require('../helpers/lib/areas.js').textWidget
					}
				},
				{
					name: 'icon',
					label: 'Item Icon',
					type: 'area',
					limit: 1,
					options: {
						widgets: {
							'icon': {}
						}
					}
				}
			]
		},
		{
			name: 'style',
			type: 'select',
			label: 'List Type',
			def: 'list-disc',
			choices: [
				{ label: 'None', value: 'list-none' },
				{ label: 'Disc', value: 'list-disc' },
				{ label: 'Numbered', value: 'list-decimal' },
				{ label: 'Custom', value: 'custom' }
			]
		},
		{
			name: 'textColor',
			type: 'select',
			label: 'Text Color',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'textSize',
			type: 'select',
			label: 'Text Size',
			def: 'large',
			choices: require('../helpers/lib/styles.js').textSize
		},
		{
			name: 'verticalSpaceBetween',
			type: 'select',
			label: 'Vertical Space Between',
			def: '4',
			choices: require('../helpers/lib/styles.js').verticalSpaceBetween
		},
		{
			name: 'lineSpacing',
			type: 'select',
			label: 'Line Spacing',
			def: 'default',
			choices: require('../helpers/lib/styles.js').lineSpacing
		}
	]
}
