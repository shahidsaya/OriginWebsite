module.exports = {
	extend: 'apostrophe-widgets',
	label: 'CTA',
	addFields: [
		{
			name: '_image',
			type: 'joinByOne',
			withType: 'apostrophe-image',
			label: 'Image'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		},
		{
			name: 'subtitle',
			label: 'Subtitle',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').textWidget
			}
		},
		{
			name: 'copy',
			label: 'Short Copy Block',
			type: 'area',
			options: {
				widgets: {
					'rich-text': {}
				}
			}
		},
		{
			name: 'links',
			label: 'Links',
			type: 'array',
			schema: [
				{
					name: 'is_external',
					label: 'Is External URL',
					type: 'boolean',
					def: true,
					choices: [
						{value: true, showFields: ['external_url']},
						{value: false, showFields: ['_linkPage']}
					]
				},
				{
					name: 'external_url',
					label: 'External URL',
					type: 'string'
				},
				{
					name: 'link_title',
					label: 'Link Title',
					type: 'string'
				},
				{
					name: '_linkPage',
					label: 'Link Page',
					type: 'joinByOne',
					withType: 'apostrophe-page',
					idField: 'pageId',
					filters: {
						projection: {
							title: 1,
							_url: 1
						}
					}
				}
			]
		},
	],
	arrangeFields: [
		{
			name: 'main',
			label: 'Main',
			fields: ['_image', 'title', 'subtitle', 'copy', 'links']
		}
	],
}
