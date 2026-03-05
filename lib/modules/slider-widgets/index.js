module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Slider',
	addFields: [
		{
			name: 'pagination',
			label: 'Pagination',
			type: 'select',
			def: true,
			choices: [
				{ label: 'Enabled', value: true },
				{ label: 'Disabled', value: false }
			]
		},
		{
			name: 'paginationPosition',
			label: 'Pagination Position',
			type: 'select',
			def: 'inner',
			choices: [
				{ label: 'Inner', value: 'inner' },
				{ label: 'Outer', value: 'outer' }
			]
		},
		{
			name: 'paginationActiveColor',
			label: 'Pagination Active Color',
			type: 'select',
			def: 'important:bg-blue',
			choices: [
				{ label: 'blue', value: 'important:bg-blue' },
				{ label: 'gold', value: 'important:bg-gold' }
			]
		},
		{
			name: 'showArrows',
			label: 'Show Arrows',
			type: 'boolean',
			def: true,
			choices: [
				{ label: 'No', value: false },
				{ label: 'Yes', value: true }
			]
		},
		{
			name: 'backgroundColor',
			label: 'Background Color',
			type: 'select',
			def: 'extra-light-grey',
			choices: require('../helpers/lib/styles.js').backgroundColor
		},
		{
			name: 'sliderItems',
			label: 'Slider Items',
			type: 'array',
			schema: [
				{
					name: 'mainArea',
					label: 'Main Area',
					type: 'area',
					blockLevelControls: true,
					options: {
						widgets: require('../helpers/lib/areas.js').allWidgets
					}
				}
			]
		},
		{
			name: 'hideWidget',
			label: 'Hide Widget',
			type: 'boolean',
			style: 'radio',
			def: false,
		},
	],
	arrangeFields: [
		{
			name: 'slides',
			label: 'Slides',
			fields: ['sliderItems', 'hideWidget']
		},
		{
			name: 'style',
			label: 'Style',
			fields: ['backgroundColor']
		},
		{
			name: 'pagination',
			label: 'Pagination',
			fields: ['pagination', 'paginationPosition', 'paginationActiveColor', 'showArrows']
		},
	],
}
