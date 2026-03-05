/* https://github.com/apostrophecms/sanitize-html */
module.exports = {
	sanitizeHtml: {
		disallowedTagsMode: 'recursiveEscape',
		allowedClasses: {
			'*': ['*']
		},
		allowedTags: [
			'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote',
			'p', 'a', 'ul', 'ol', 'nl', 'li',
			'b', 'i', 'strong', 'em', 'strike', 'abbr',
			'hr', 'br', 'caption', 'span',
			'table', 'thead', 'tbody', 'tr', 'th', 'td'
		],
		allowedAttributes: {
			'a': [ 'href', 'name', 'target', 'class' ],
			'*': ['class']
		},
		allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel']
	}
}
