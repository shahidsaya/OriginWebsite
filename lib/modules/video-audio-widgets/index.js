module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Video + Audio Player',
	addFields: [
		{
			type: 'integer',
			name: 'vimeoID',
			label: 'Vimeo – Video ID',
			def: '',
			help: 'Example: "675879124"'
		},
		{
			name: '_file',
			label: 'File',
			help: "Video: '.mp4'; Audio: '.mp3'",
			type: 'joinByOne',
			withType: 'apostrophe-file',
			/*filters: {
			 projection: {
			 attachment: 1,
			 title: 1
			 }
			 },*/
		}
	],
	arrangeFields: [
		{
			name: 'vimeo',
			label: 'Vimeo',
			fields: ['vimeoID']
		},

		/* File Source */
		{
			name: 'file',
			label: 'File Source',
			fields: ['_file']
		},

		/* Style */
		/*{
		 name: 'style',
		 label: 'Style',
		 fields: ['', '', '']
		 },*/
	]
}
