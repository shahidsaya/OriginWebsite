module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Icon',
	addFields: [
		/*{
			name: 'icon',
			label: 'Icon',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').imageWidget
			}
		},*/
		{
			name: '_iconImage',
			type: 'joinByOne',
			withType: 'apostrophe-image',
			label: 'Icon Image',
			idField: 'imageClientId',
		},
		{
			name: 'width',
			label: 'Width',
			type: 'select',
			def: 'w-12',
			choices: [
				{ label: 'None', value: '' },
				{ label: '2XS', value: 'w-4' },
				{ label: 'Extra Small', value: 'w-6' },
				{ label: 'Small', value: 'w-8' },
				{ label: 'Medium', value: 'w-12' },
				{ label: 'Large', value: 'w-20' },
				{ label: 'Extra Large', value: 'w-32' },
				{ label: '2XL', value: 'w-48' },
				{ label: '3XL', value: 'w-64' },
				{ label: '4XL', value: 'w-80' },
				{ label: '5XL', value: 'w-96' },
				{ label: 'Full', value: 'w-full' },
			]
		},
		{
			name: 'padding',
			label: 'Padding',
			type: 'select',
			def: '8',
			choices: require('../helpers/lib/styles.js').padding
		},
		{
			name: 'lineColor',
			label: 'Line Color',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'backgroundColor',
			label: 'Background Color',
			type: 'select',
			def: 'gradient',
			choices: require('../helpers/lib/styles.js').backgroundColor
		},
		{
			name: 'borderColor',
			label: 'Border Color',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').borderColor
		},
		{
			name: 'borderWidth',
			label: 'Border Width',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').borderWidth
		},
		{
			name: 'borderRadius',
			label: 'Border Radius',
			type: 'select',
			def: 'none',
			choices: require('../helpers/lib/styles.js').borderRadius
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
