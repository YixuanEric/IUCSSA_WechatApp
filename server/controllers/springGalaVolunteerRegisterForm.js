const { mysql } = require('../qcloud')

async function post(ctx) {
  const body = await ctx.request.body;
  const _wechat = body.wechat;
  const _name = body.name;
  const _textarea = body.textarea;
  const _grade = body.grade;
  const _registrationType = body.registrationType;
  const _phone = body.phone;
  console.log(body);
  mysql('springGalaVolunteerRegisterForm')
    .insert({
      wechat: _wechat,
      name: _name,
      grade: _grade,
      registrationType: _registrationType,
      phone: _phone,
      textarea: _textarea
    }).returning('*').then(res => { console.log(res) })

  const body2 = await mysql.select().table('springGalaVolunteerRegisterForm');
  ctx.state.data = {
    msg: JSON.stringify(body2) + "Hello World !"
  }
}
async function get(ctx) {
  const body = await mysql.select().table('springGalaVolunteerRegisterForm');
  console.log(body);
  ctx.body = body;
}

module.exports = {
  get,
  post
}
