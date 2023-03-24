const {
  ERROR, OFF,
} = require('../utils/constants');

/**
  * Rules which govern what language constructs should be used and how.
  */

module.exports = {
  es: {
    plugins: [
      'import',
    ],
    rules: {
      'no-nested-ternary'          : OFF,
      'no-prototype-builtins'      : OFF,
      'no-plusplus'                : OFF,
      'yoda'                       : OFF,
      'default-param-last'         : OFF,
      'no-promise-executor-return' : OFF,
      'no-continue'                : OFF,
      'no-fallthrough'             : OFF,
      'no-bitwise'                 : OFF,
      'no-restricted-globals'      : [ ERROR ],
      'prefer-destructuring'       : OFF,

      'import/no-extraneous-dependencies' : [ ERROR ],
      'import/order'                      : [ ERROR, {
        alphabetize : { order: 'asc' },
        groups      : [ 'builtin', 'external', 'internal', 'parent', 'sibling' ],
      } ],
    },
  },
};
