'use strict';
module.exports = function(app) {
  /* user controller */
  let userController = require('./controller/UserController');

  /* voucher controller */
  let voucherController = require('./controller/VoucherController');

  /* event controller */
  let eventController = require('./controller/EventController');

  // api get a voucher
  app.route('/user/signup')
    .post(userController.signUp);

  // api get a voucher
  app.route('/user/signin')
    .post(userController.signIn);
  
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