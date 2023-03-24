const {
  ERROR, OFF,
} = require('../utils/constants');

/**
  * Rules which govern the use of whitespace, punctuation, etc.
  */

module.exports = {
  es: {
    plugins: [
      'align-assignments',
      'align-import',
    ],
    rules: {
      'align-import/align-import'           : [ ERROR ],
      'align-assignments/align-assignments' : [ ERROR, { requiresOnly: false } ],
      'padding-line-between-statements'     : [
        ERROR, ...[
          [ '*', [ 'multiline-block-like', 'return', 'break', 'export', 'throw', 'cjs-export' ] ],
          [ '*', [ 'cjs-import', 'import', 'const', 'let', 'var' ] ],
          [ [ 'multiline-block-like', 'return', 'break', 'export', 'throw', 'cjs-export' ], '*' ],
          [ [ 'cjs-import', 'import', 'const', 'let', 'var' ], '*' ],
          [ 'cjs-import', 'cjs-import', 'any' ],
          [ 'import', 'import', 'any' ],
          [ 'singleline-const', 'const', 'any' ],
          [ 'singleline-let', 'let', 'any' ],
          [ 'singleline-var', 'var', 'any' ],
          [ 'expression', 'expression', 'any' ],
        ].map(
          ([ prev, next = '*', blankLine = 'always' ]) => ({ prev, next, blankLine })
        ),
      ],

      'space-in-parens'        : [ ERROR, 'never' ],
      'template-curly-spacing' : [ ERROR, 'always' ],
      'object-curly-spacing'   : [ ERROR, 'always' ],
      'array-bracket-spacing'  : [ ERROR, 'always' ],
      'quotes'                 : [ ERROR, 'single', { avoidEscape: true } ],
      'quote-props'            : [ ERROR, 'consistent-as-needed' ],

      'arrow-parens'                   : [ ERROR, 'as-needed', { requireForBlockBody: true } ],
      'function-paren-newline'         : [ ERROR, 'consistent' ],
      'function-call-argument-newline' : [ ERROR, 'consistent' ],
      'linebreak-style'                : [ ERROR, 'unix' ],

      'semi'         : [ ERROR, 'always' ],
      'comma-dangle' : [ ERROR, {
        arrays    : 'always-multiline',
        objects   : 'always-multiline',
        imports   : 'always-multiline',
        exports   : 'always-multiline',
        functions : 'never',
      } ],

      'key-spacing': [ ERROR, {
        singleLine : { beforeColon: false, afterColon: true },
        multiLine  : { beforeColon: false, afterColon: true },
        align      : { beforeColon: true, afterColon: true, on: 'colon' },
      } ],

      'object-curly-newline': [ ERROR, {
        ObjectExpression : { multiline: true, consistent: true },
        ObjectPattern    : { multiline: true, consistent: true },
      } ],

      'max-len'                  : OFF,
      'no-multi-spaces'          : OFF,
      'newline-per-chained-call' : OFF,

      'object-shorthand' : [ ERROR, 'consistent' ],
      'func-names'       : [ ERROR, 'as-needed' ],
    },
  },
};
