'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/wechat.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /weixin/test', () => {
    return app.httpRequest()
      .get('/weixin/test')
      .expect('hi, test')
      .expect(200);
  });
});
