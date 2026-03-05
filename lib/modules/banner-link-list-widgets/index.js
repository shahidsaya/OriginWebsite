module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Banner Link List',
	addFields: [
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
						{value: true, showFields: ['external_url', 'link_title']},
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
		}
	]
}
