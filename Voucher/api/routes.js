'use strict';
module.exports = function(app) {
  let voucherController = require('./controller/VoucherController');

  // api get a voucher
  app.route('/voucher')
    .get(voucherController.getVoucher);
};