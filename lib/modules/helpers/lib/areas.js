const _ = require('lodash');

const baseToolbar = [
	'Styles',
	'Bold',
	'Italic',
	'Blockquote',
	'Link',
	'Anchor',
	'Unlink',
	'undo',
	'redo',
	'NumberedList',
	'BulletedList',
	'Table',
	'Subscript', 'Superscript'
]

const baseStyles = [

	// Colours
	{
		name: 'Black Text Color',
		element: 'span',
		attributes: {class: 'text-black'}
	},
	{
		name: 'Blue Text Color',
		element: 'span',
		attributes: {class: 'text-blue-100'}
	},
	{
		name: 'White Text Color',
		element: 'span',
		attributes: {class: 'text-white'}
	},
	{
		name: 'Light Blue Text Color',
		element: 'span',
		attributes: {class: 'text-blue-60'}
	},

	// Left Styles
	{
		name: 'Left Extra Small Text',
		element: 'p',
		attributes: {class: 'p-xs text-left'}
	},
	{
		name: 'Left Small Text',
		element: 'p',
		attributes: {class: 'p-sm text-left'}
	},
	{
		name: 'Left Normal Text (General Body Text)',
		element: 'p',
		attributes: {class: 'p text-left'}
	},
	{
		name: 'Left Large Text',
		element: 'p',
		attributes: {class: 'p-lg text-left'}
	},
	{
		name: 'Left Extra Large Text',
		element: 'p',
		attributes: {class: 'p-xl text-left'}
	},
	{
		name: 'Left 2XL Text (Fancy Paragraph)',
		element: 'p',
		attributes: {class: 'p-2xl text-left'}
	},
	{
		name: 'Left H4',
		element: 'h4',
		attributes: {class: 'h4 text-left'}
	},
	{
		name: 'Left H3',
		element: 'h3',
		attributes: {class: 'h3 text-left'}
	},
	{
		name: 'Left H2 Small',
		element: 'h2',
		attributes: {class: 'h2-small text-left'}
	},
	{
		name: 'Left H2 Large',
		element: 'h2',
		attributes: {class: 'h2-large text-left'}
	},
	{
		name: 'Left H1',
		element: 'h1',
		attributes: {class: 'h1 text-left'}
	},

	// Centre Styles
	{
		name: 'Centre Extra Small Text',
		element: 'p',
		attributes: {class: 'p-xs text-center'}
	},
	{
		name: 'Centre Small Text',
		element: 'p',
		attributes: {class: 'p-sm text-center'}
	},
	{
		name: 'Centre Normal Text (General Body Text)',
		element: 'p',
		attributes: {class: 'p text-center'}
	},
	{
		name: 'Centre Large Text',
		element: 'p',
		attributes: {class: 'p-lg text-center'}
	},
	{
		name: 'Centre Extra Large Text',
		element: 'p',
		attributes: {class: 'p-xl text-center'}
	},
	{
		name: 'Centre 2XL Text (Fancy Paragraph)',
		element: 'p',
		attributes: {class: 'p-2xl text-center'}
	},
	{
		name: 'Centre H4',
		element: 'h4',
		attributes: {class: 'h4 text-center'}
	},
	{
		name: 'Centre H3',
		element: 'h3',
		attributes: {class: 'h3 text-center'}
	},
	{
		name: 'Centre H2 Small',
		element: 'h2',
		attributes: {class: 'h2-small text-center'}
	},
	{
		name: 'Centre H2 Large',
		element: 'h2',
		attributes: {class: 'h2-large text-center'}
	},
	{
		name: 'Centre H1',
		element: 'h1',
		attributes: {class: 'h1 text-center'}
	},


	// Right Styles
	{
		name: 'Right Extra Small Text',
		element: 'p',
		attributes: {class: 'p-xs text-right'}
	},
	{
		name: 'Right Small Text',
		element: 'p',
		attributes: {class: 'p-sm text-right'}
	},
	{
		name: 'Right Normal Text',
		element: 'p',
		attributes: {class: 'p text-right'}
	},
	{
		name: 'Right Large Text',
		element: 'p',
		attributes: {class: 'p-lg text-right'}
	},
	{
		name: 'Right Extra Large Text',
		element: 'p',
		attributes: {class: 'p-xl text-right'}
	},
	{
		name: 'Right 2XL Text (Fancy Paragraph)',
		element: 'p',
		attributes: {class: 'p-2xl text-right'}
	},
	{
		name: 'Right H4',
		element: 'h4',
		attributes: {class: 'h4 text-right'}
	},
	{
		name: 'Right H3',
		element: 'h3',
		attributes: {class: 'h3 text-right'}
	},
	{
		name: 'Right H2 Small',
		element: 'h2',
		attributes: {class: 'h2-small text-right'}
	},
	{
		name: 'Right H2 Large',
		element: 'h2',
		attributes: {class: 'h2-large text-right'}
	},
	{
		name: 'Right H1',
		element: 'h1',
		attributes: {class: 'h1 text-right'}
	}
]

const essentialWidgets = {
	'apostrophe-rich-text': {
		toolbar: baseToolbar,
		styles: baseStyles,
		defaultElement: 'p'
	},
	'apostrophe-images': {}
}

const textWidget = {
	'apostrophe-rich-text': {
		name: 'text',
		label: 'Text',
		addLabel: 'Simple Text',
		editLabel: 'Change text',
		defaultElement: 'p',
		toolbar: [
			'Styles', 'Bold', 'Italic', 'Link', 'Unlink'
		],
		styles: baseStyles
	}
}

const imageWidget = {
	'apostrophe-images': {
		name: 'image',
		label: 'Single Image',
		addLabel: 'Image',
		editLabel: 'Change image',
		template: 'single',
		controls: {
			movable: false
		}
	}
}

const allWidgets = Object.assign(
	/*essentialWidgets,*/
	_.clone(textWidget),
	{
		'rich-text': {}
	},
	_.clone(imageWidget),
	{
		'apostrophe-video': {},
		'video-audio': {},
		'container': {
			/*controls: {
			 position: 'top-right'
			 }*/
		},
		'page-header': {},
		'title': {},
		'horizontal-gap': {},
		'link': {},
		'link-anchor': {},
		'button': {},
		'icon': {},
		'divider': {},
		'columns': {
			/*controls: {
			 position: 'top-right'
			 }*/
		},
		'grid': {},
		'template-grid': {},
		'slider': {},
		'slider-inner-promo': {},
		'slider-inner-testimonial': {},
		'cta-box': {},
		'button-list': {},
		'list': {},
		'card': {},
		'news': {},
		'embed': {},
		'resource-card': {},
		'testimonial': {},
		'journey': {},
		'accordion': {},
		'rows': {},
		'small-cta': {},
		'styled-paragraph': {},
		'badge': {},
	})

const htmlWidget = {
	'apostrophe-html': {}
}

const footerWidgets = Object.assign({
		'rich-text': {},
		'footer-link-list': {}
	})

module.exports = {
	baseToolbar,
	baseStyles,

	essentialWidgets,
	textWidget,
	imageWidget,
	htmlWidget,
	allWidgets,
	footerWidgets
}
