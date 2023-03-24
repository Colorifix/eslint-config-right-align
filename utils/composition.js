module.exports = {
  compose: (...rulesets) => {
    const compositeRuleset = {
      extends: [],
    };

    rulesets.forEach(
      (ruleset) => {
        if ('string' === typeof ruleset) {
          compositeRuleset.extends.push(ruleset);
        } else {
          Object.entries(ruleset).forEach(
            ([ key, value ]) => {
              if (!compositeRuleset.hasOwnProperty(key)) {
                compositeRuleset[key] = value;
              } else if (Array.isArray(compositeRuleset[key])) {
                compositeRuleset[key] = compositeRuleset[key].concat(value);
              } else if ('object' === typeof compositeRuleset[key] && 'object' === typeof value) {
                compositeRuleset[key] = {
                  ...compositeRuleset[key],
                  ...value,
                };
                // todo: consider whether there are special cases, e.g. for
                //
                //     { 'some-rule': [ 'WARNING', { singleLine: false } ] }
                //     { 'some-rule': 'WARNING' }
              } else {
                compositeRuleset[key] = value;
              }
            }
          );
        }
      }
    );

    return compositeRuleset;
  },
};
