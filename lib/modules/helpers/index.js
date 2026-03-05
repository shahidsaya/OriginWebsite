const _ = require('lodash');
const areas = require('./lib/areas.js')
const styles = require('./lib/styles.js')
const {htmlToText} = require('html-to-text');
const getWorkflowMode = require('./get-workflow-mode');

module.exports = {
	extend: 'apostrophe-module',
	alias: 'helpers',
	label: 'Helpers',
	construct: function(self, options) {
		self.addHelpers({

			getWorkflowMode,

			isLiveMode: function(data) {
				return getWorkflowMode(data) === 'live';
			},

			isPreviewMode: function(data) {
				return getWorkflowMode(data) === 'preview';
			},

			isDraftMode: function(data) {
				return getWorkflowMode(data) === 'draft';
			},

			getKeys: function(object) {
				return Object.keys(object);
			},

			isLocal: function(data) {
				const {baseUrl} = data;
				return baseUrl && (baseUrl.indexOf('localhost') !== -1);
			},

			thisYear: function() {
				return new Date().getFullYear();
			},

			htmlToText: function(html) {
				return htmlToText(html)
			},

			baseStyles: _.clone(areas.baseStyles),
			baseToolbar: _.clone(areas.baseToolbar),

			essentialWidgets: _.clone(areas.essentialWidgets),
			allWidgets: _.clone(areas.allWidgets),
			textWidget: _.clone(areas.textWidget),
			imageWidget: _.clone(areas.imageWidget),
			footerWidgets: _.clone(areas.footerWidgets),

			// style helpers
			// TODO automate this
			fontFamily: function(value) {
				let item = styles.fontFamily.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'fontFamily;', 'value:', value)
					return 'unknown'
				}
			},
			width: function(value) {
				let item = styles.width.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'width;', 'value:', value)
					return 'unknown'
				}
			},
			height: function(value) {
				let item = styles.height.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'height;', 'value:', value)
					return 'unknown'
				}
			},
			padding: function(value) {
				let item = styles.padding.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'padding;', 'value:', value)
					return 'unknown'
				}
			},
			paddingTop: function(value) {
				let item = styles.paddingTop.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'paddingTop;', 'value:', value)
					return 'unknown'
				}
			},
			paddingBottom: function(value) {
				let item = styles.paddingBottom.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'paddingBottom;', 'value:', value)
					return 'unknown'
				}
			},
			marginTop: function(value) {
				let item = styles.marginTop.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'marginTop;', 'value:', value)
					return 'unknown'
				}
			},
			marginBottom: function(value) {
				let item = styles.marginBottom.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'marginBottom;', 'value:', value)
					return 'unknown'
				}
			},
			textColor: function(value) {
				let item = styles.textColor.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'textColor;', 'value:', value)
					return 'unknown'
				}
			},
			textSize: function(value) {
				let item = styles.textSize.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'textSize;', 'value:', value)
					return 'unknown'
				}
			},
			textWeight: function(value) {
				let item = styles.textWeight.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'textWeight;', 'value:', value)
					return 'unknown'
				}
			},
			textAlign: function(value) {
				let item = styles.textAlign.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'textAlign;', 'value:', value)
					return 'unknown'
				}
			},
			backgroundColor: function(value) {
				let item = styles.backgroundColor.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'backgroundColor;', 'value:', value)
					return 'unknown'
				}
			},
			borderColor: function(value) {
				let item = styles.borderColor.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'borderColor;', 'value:', value)
					return 'unknown'
				}
			},
			borderWidth: function(value) {
				let item = styles.borderWidth.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'borderWidth;', 'value:', value)
					return 'unknown'
				}
			},
			borderRadius: function(value) {
				let item = styles.borderRadius.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'borderRadius;', 'value:', value)
					return 'unknown'
				}
			},
			lineSpacing: function(value) {
				let item = styles.lineSpacing.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'lineHeight;', 'value:', value)
					return 'unknown'
				}
			},
			justifyContent: function(value) {
				let item = styles.justifyContent.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'justifyContent;', 'value:', value)
					return 'unknown'
				}
			},
			maxWidth: function(value) {
				let item = styles.maxWidth.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'maxWidth;', 'value:', value)
					return 'unknown'
				}
			},
			verticalSpaceBetween: function(value) {
				let item = styles.verticalSpaceBetween.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'verticalSpaceBetween;', 'value:', value)
					return 'unknown'
				}
			},
			gridRows: function(value) {
				let item = styles.gridRows.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'gridRows;', 'value:', value)
					return 'unknown'
				}
			},
			gridColumns: function(value) {
				let item = styles.gridColumns.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'gridColumns;', 'value:', value)
					return 'unknown'
				}
			},
			gap: function(value) {
				let item = styles.gap.filter(item => item.value === value)
				if(item[0]) {
					return item[0].class
				} else {
					console.error('-- Class value not found in', 'gap;', 'value:', value)
					return 'unknown'
				}
			}
		});
	}
};
