'use strict';

const Controller = require('egg').Controller;

class WeChatController extends Controller {
  constructor(ctx) {
    super(ctx)
  }
  async test() {
    const { ctx } = this;
    ctx.body = 'hi, test';
  }
  async token() {
    const { ctx } = this;
    ctx.helper.success({ctx});
  }
}

module.exports = WeChatController;
