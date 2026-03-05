module.exports = {
	extend: 'apostrophe-widgets',
	label: 'Card',
	skipInitialModal: true,
	contextual: true,
	addFields: [
		{
			name: 'icon',
			type: 'area',
			options: {
				widgets: { 'icon': {} }
			}
		},
		{
			name: 'title',
			type: 'area',
			contextual: true
		},
		{
			name: 'subtitle',
			type: 'area',
			contextual: true
		},
		{
			name: 'titleFont',
			type: 'select',
			label: 'Title Font',
			def: 'primary',
			choices: require('../helpers/lib/styles.js').fontFamily
		},
		{
			name: 'titleFontWeight',
			type: 'select',
			label: 'Title Font Weight',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textWeight
		},
		{
			name: 'titleColor',
			type: 'select',
			label: 'Title Text Color',
			def: 'primary',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'titleSize',
			type: 'select',
			label: 'Title Text Size',
			def: '3xl',
			choices: require('../helpers/lib/styles.js').textSize
		},
		{
			name: 'titleTextAlign',
			label: 'Title Text Align',
			type: 'select',
			def: 'center',
			choices: require('../helpers/lib/styles.js').textAlign
		},
		{
			name: 'subtitleFontWeight',
			type: 'select',
			label: 'Subtitle Font Weight',
			def: 'none',
			choices: require('../helpers/lib/styles.js').textWeight
		},
		{
			name: 'subtitleColor',
			type: 'select',
			label: 'Subtitle Text Color',
			def: 'black',
			choices: require('../helpers/lib/styles.js').textColor
		},
		{
			name: 'subtitleSize',
			type: 'select',
			label: 'Subtitle Text Size',
			def: 'xl',
			choices: require('../helpers/lib/styles.js').textSize
		},
		{
			name: 'subtitleTextAlign',
			label: 'Subtitle Text Align',
			type: 'select',
			def: 'center',
			choices: require('../helpers/lib/styles.js').textAlign
		},
		{
			name: 'mainArea',
			label: 'Main Area',
			type: 'area',
			blockLevelControls: true,
			options: {
				widgets: require('../helpers/lib/areas.js').allWidgets
			}
		}
	],
	arrangeFields: [
		{
			name: 'titleStyle',
			label: 'Title Style',
			fields: ['titleFont', 'titleColor', 'titleSize', 'titleFontWeight', 'titleTextAlign']
		},
		{
			name: 'subtitleStyle',
			label: 'Subtitle Style',
			fields: ['subtitleColor', 'subtitleSize', 'subtitleFontWeight', 'subtitleTextAlign']
		},
		{
			name: 'content',
			label: 'Content',
			fields: ['icon', 'mainArea']
		}
	],
}
