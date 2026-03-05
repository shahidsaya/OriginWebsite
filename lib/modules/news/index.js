module.exports = {
	extend: 'apostrophe-pieces',
	name: 'news',
	label: 'News & Announcement',
	pluralLabel: 'News & Announcements',
	contextual: true,
	addFields: [
		{
			name: 'featured',
			label: 'Featured',
			type: 'boolean',
			style: 'radio',
			def: false,
		},
		{
			name: 'shortDescription',
			label: 'Short Description',
			type: 'string',
			textarea: true
		},
		{
			name: 'content',
			label: 'Content',
			type: 'area',
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			}
		},
		{
			name: '_image',
			type: 'joinByOne',
			withType: 'apostrophe-image',
			label: 'Image',
			required: true,
			filters: {
				projection: {
					attachment: true
				}
			},
		}
	],
	arrangeFields: [
		{
			name: 'newsPost',
			label: 'News Post',
			fields: ['title', 'slug', 'featured', '_image', 'shortDescription', 'content', 'tags', 'published', 'publishedAt']
		}
	],
	addColumns: [
		{
			name: 'featured',
			label: 'Featured',
			sort: {
				featured: 1
			}
		}
	]
}
