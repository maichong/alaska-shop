/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-08-05
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

export default class Shop extends alaska.Model {

  static label = 'Shop';
  static icon = 'home';
  static defaultColumns = 'logo title user brand activated createdAt';
  static defaultSort = '-createdAt';

  static defaultFilters = ctx => {
    if (ctx.service.id === 'alaska-admin') return null;
    return {
      activated: true
    };
  };

  static api = {
    list: 1,
    show: 1
  };

  static fields = {
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    logo: {
      label: 'Logo',
      type: 'image'
    },
    user: {
      label: 'User',
      ref: 'alaska-user.User',
      required: true
    },
    brand: {
      label: 'Brand',
      ref: 'alaska-goods.Brand',
      optional: true
    },
    activated: {
      label: 'Activated',
      type: Boolean,
      default: true,
      private: true
    },
    createdAt: {
      label: 'Created At',
      type: Date
    },
    desc: {
      label: 'Description',
      type: 'html'
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
