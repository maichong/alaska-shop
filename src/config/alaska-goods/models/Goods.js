/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-08-05
 * @author Liang <liang@maichong.it>
 */

import Shop from '../../../models/Shop';

export const fields = {
  shop: {
    label: 'Shop',
    ref: Shop,
    index: true
  }
};
