const { mysql } = require('../qcloud')

async function post(ctx) {
  const body = await ctx.request.body;
  const _wechat = body.wechat;
  const _showName = body.showName;
  const _textarea = body.textarea;
  const _showLength = body.showLength;
  const _performerAmount = body.performerAmount;
  const _showType = body.showType;
  const _phone = body.phone;
  console.log(body);
  mysql('springGalaShowRegisterForm')
    .insert({
      wechat: _wechat,
      showName:_showName,
      showLength:_showLength,
      performerAmount : _performerAmount,
      showType : _showType,
      phone: _phone,
      textarea: _textarea
    }).returning('*').then(res => { console.log(res) })
  
  const body2 = await mysql.select().table('springGalaShowRegisterForm');
  ctx.state.data = {
    msg: JSON.stringify(body2) + "Hello World !"
  }
}
async function get(ctx) {
  const body = await mysql.select().table('springGalaShowRegisterForm');
  console.log(body);
  ctx.body = body;
}

module.exports = {
  get,
  post
}
