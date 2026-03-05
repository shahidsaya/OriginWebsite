module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Accordion Widget',
  addFields: [
    {
      name: 'startOpen',
      type: 'boolean',
      def: false
    },
    {
      name: 'accordionHeader',
      label: 'Accordion Header',
      type: 'string'
    },
    {
      name: 'accordionContent',
      label: 'Accordion Content',
      type: 'area',
      options: {
        widgets: require('../helpers/lib/areas.js').allWidgets
      },
    },
  ]
};
