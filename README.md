# eslint-config-right-align

```
                                       If you are looking for a module that will
                                         right-align your code... this isn't it.

                                                                          Sorry.
```


But it will hopefully help you format your code in the **right** way, using
`eslint`'s rules system to **align**:

- how your code **looks** with
- what your code **means**

For instance:

```javascript
import _      from 'lodash';
import Vendor from './vendors';

const vendorSummary = (options) => {
  const vendor     = new Vendor(options);
  const vendorName = vendor.getName();

  let itemCount = 0;

  if (vendor.hasItems) {
    const stockedItems = vendor.getItems().filter(
      item => (
        item.hasExactStockCount
          ? item.stockCount >= 1
          : item.stockLevel === 'plentiful'
      )
    );

    console.log(`${ vendorName } had ${ stockedItems } items`);

    itemCount = stockedItems.length;
  } else {
    console.log(`${ vendorName } had no items`);

    // Being out of stock is one thing,
    // but if you never sell anything,
    // are you a real vendor?
    throw new Error("This isn't a real vendor!");
  }

  return {
    name       : vendorName,
    properties : [ { type: 'Vendor' }, { itemCount } ],
  };
};
```

Notice in particular how:

- **Similar assignment/import statements** like `import`, `const` that are
  on adjacent lines are **aligned on the assignment operator** `=` (or the
  keyword `from`). This helps pick the statements themselves out and also the
  to compare different parts of the statement - the names, the values.
- The same approach is taken for **object keys**, which are aligned on `:`.
- Spaces are also used to provide **consistent horizontal padding**, separating
  out nested square brackets and curly braces, including in template literals.
  This makes it easier to spot pairs.
- **Dissimilar statements**, especially imports, assignments, and flow control,
  are **kept separate** from each other, and from any other statements, with
  empty lines as **vertical padding**. This helps to encourage distinguish
  different phases in each scope, typically beginning with gathering data,
  and ending with a `return` or an `export` statement. Early `return` and
  `throw` will also be guaranteed vertical padding.
- `if`/`else` statements (and for that matter `try`/`catch`) are part of the
  same construction and the `else` runs on to reinforce that. Each such
  construction still gets vertical padding in order to separate it from other
  statements.

These considerations about what facilitates readability are the primary
motivation behind this ESLint configuration.

This sits alongside the other eslint configurations out there which all offer
some degree of the following, albeit with a different balance:

- readability
- consistency
- flexibility
- resilience to merge conflicts
- aesthetics
- familiarity for particular audiences

### Usage

### Install `eslint-config-right-align` as a development dependency

```bash
# If you have yarn:
yarn add --save-dev eslint-config-right-align

# Otherwise
npm install --save-dev eslint-config-right-align
```

### Configure eslint to use the `right-align` settings

Add `'right-align'` to `'extends'` in your ESLint config file; if you don't
have one, create a `.eslintrc.js` file in your project with the following
content:

```javascript
module.exports = {
  extends: [
    'right-align',
  ],
}
```

Note that if you are currently using other general-purpose configurations in
your ESLint `extends` (for instance `eslint:recommended`), they may conflict
and you may need to remove them.

### Key dependencies

This eslint configuration is primarily built on the widely-used
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
a self-described _mostly reasonable approach to JavaScript_; aside from its
popularity and its (mostly very) reasonable choices about rules, the
recommendations and especially the justifications are well worth reading: much
thought has gone into steering developers away from practices which invite
mistakes.

In addition to varying the core eslint rules specified in the the Airbnb rule
set, a few key packages and rules implementations warrant highlighting:

- `eslint-plugin-align-assignments`, providing
  - `align-assignments/align-assignments`
- `eslint-plugin-align-import`, providing
  - `align-import/align-import`
- `eslint-plugin-import`, providing
  - `import/no-extraneous-dependencies` and
  - `import/order`
- ... and within the eslint core:
  - `padding-line-between-statements`
