module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Button List',
	addFields: [
		{
			name: 'layout',
			label: 'Button Group Layout',
			type: 'select',
			def: 'flex-col',
			choices: [
				{ label: 'Column', value: 'flex-col' },
				{ label: 'Row', value: 'flex-row' },
			]
		},
		{
			name: 'align',
			label: 'Button Group Alignment',
			type: 'select',
			def: 'center',
			choices: [
				{ label: 'Center', value: 'center' },
				{ label: 'Left', value: 'start' },
				{ label: 'Right', value: 'end' },
			]
		},
		{
			name: 'columnGap',
			label: 'Gap Between Buttons',
			type: 'select',
			def: 'mx-2',
			choices: [
				{ label: 'Small', value: 'mx-2' },
				{ label: 'Medium', value: 'mx-6' },
				{ label: 'Large', value: 'mx-10' }
			]
		},
		{
			name: 'buttons',
			label: 'Buttons',
			type: 'array',
			schema: [
				{
					name: 'button',
					type: 'area',
					options: {
						widgets: { 'button': {} }
					}
				},
			]
		}
	],
}
