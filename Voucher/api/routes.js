'use strict';
module.exports = function(app) {
    let voucherController = require('./controller/VoucherController');
    let eventController = require('./controller/EventController');
    // api get a voucher
    app.route('/voucher/generate')
      .get(voucherController.generateVoucher);

    // api get a voucher
    app.route('/events/generate')
      .post(eventController.generateEvent);

    // api get a voucher
    app.route('/events/:event_id/editable/me')
      .post(eventController.editEvent);

    // api get a voucher
    app.route('/events/:event_id/editable/release')
      .post(eventController.releaseEvent);

    // api get a voucher
    app.route('/events/:event_id/editable/maintain')
      .post(eventController.releaseEvent);
};