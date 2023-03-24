/* eslint-disable import/no-unresolved, import/extensions */
import { Logger } from '../utils';
import Vendor     from './vendors';

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

    Logger.info(`${ vendorName } had ${ stockedItems } items`);

    itemCount = stockedItems.length;
  } else {
    Logger.info(`${ vendorName } had no items`);

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

export default vendorSummary;
