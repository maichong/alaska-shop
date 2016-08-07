/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-08-05
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

/**
 * @class ShopService
 */
class ShopService extends alaska.Service {
  constructor(options) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-shop';
    super(options);
  }

  preLoadConfig() {
    let ORDER = alaska.service('alaska-order', true);
    if (ORDER) {
      ORDER.addConfigDir(__dirname + '/config/alaska-order');
    }
    let GOODS = alaska.service('alaska-goods', true);
    if (GOODS) {
      GOODS.addConfigDir(__dirname + '/config/alaska-goods');
    }
  }
}

export default new ShopService();
