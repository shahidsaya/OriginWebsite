module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Slider Inner Testimonial',
	addFields: [
		{
			name: 'testimonial',
			label: 'Testimonial',
			type: 'string',
			textarea: true
		},
		{
			name: 'name',
			label: 'Name',
			type: 'string'
		},
		{
			name: 'date',
			label: 'Date',
			type: 'string'
		},
		{
			name: 'button',
			label: 'Button',
			type: 'area',
			options: {
				widgets: {
					'button': {}
				}
			}
		}
	]
}
