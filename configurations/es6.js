const syntax      = require('../rules/syntax');
const typography  = require('../rules/typography');
const { compose } = require('../utils/composition');

module.exports = compose(
  // This is a widely-use base style guide; it comes with lots of rules which identify common hazards
  'airbnb-base',
  syntax.es,
  typography.es
);
