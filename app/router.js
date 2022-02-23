'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/weixin/test', controller.wechat.test);
  router.get('/weixin/token', controller.wechat.token);
};
