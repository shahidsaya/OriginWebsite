module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Footer Link List',
	addFields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string'
		},
		{
			name: 'links',
			label: 'Links',
			type: 'array',
			schema: [
                {
                    name: 'url_override',
                    label: 'URL Override',
                    type: 'string'
                },
                {
                    name: 'title_override',
                    label: 'Title Override',
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
                },
			]
		}
	]
}
