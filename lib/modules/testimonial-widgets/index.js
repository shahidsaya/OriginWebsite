module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Testimonial',
	addFields: [
		{
			name: 'testimonials',
			label: 'Testimonials',
			type: 'array',
			titleField: 'linkText',
			schema: [
				{
					name: 'testimonial',
					label: 'Testimonial',
					/*help: 'A helper to help',*/
					type: 'string',
					textarea: true
				},
				{
					name: 'name',
					label: 'Name',
					/*help: 'A helper to help',*/
					type: 'string'
				},
				{
					name: 'date',
					label: 'Date',
					/*help: 'A helper to help',*/
					type: 'string'
				}
			]
		}
	]
}
