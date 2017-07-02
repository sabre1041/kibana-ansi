module.exports = function (kibana) {
  return new kibana.Plugin({

    name: 'kibana-ansi',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: ['plugins/kibana-ansi/ansi'],
      visTypes: ['plugins/kibana-ansi/ansi']
    }
  });
};