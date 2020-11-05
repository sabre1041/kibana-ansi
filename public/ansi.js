function ANSIProvider(Private) {
    let _ = require('lodash');
    let FieldFormat = Private(require('ui/index_patterns/_field_format/field_format'));

    _.class(ANSI).inherits(FieldFormat);

    function ANSI(params) {
        ANSI.Super.call(this, params);
    }

    ANSI.id = 'ansi';
    ANSI.title = 'ANSI';
    ANSI.fieldType = [
        'string',
    ];

    ANSI.prototype._convert = function(val) {
        return val.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
    };

    return ANSI;
}

require('ui/registry/field_formats').register(ANSIProvider);
