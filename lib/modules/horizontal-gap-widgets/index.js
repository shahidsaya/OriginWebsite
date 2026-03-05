module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Horizontal Gap',
  addFields: [
    {
      name: 'gap',
      type: 'select',
      label: 'Gap',
      required: true,
      def: 'md',
      choices: [ { label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' } ]
    }
  ]
};
