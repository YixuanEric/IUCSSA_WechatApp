const { mysql } = require('../qcloud')

async function post (ctx) {
  const body = await ctx.request.body;
  const _wechat = body.wechat;
  const _grade = body.grade;
  const _textarea = body.textarea;

  mysql('feedbackForm')
    .insert({ 
      wechat: _wechat,
      grade:_grade,
      textarea: _textarea
    }).returning('*').then(res => { console.log(res) })
  console.log(JSON.stringify(body));
  ctx.state.data = {
    msg: JSON.stringify(body) + "Hello World !"
  }
}

async function get (ctx){
  const body = await mysql.select().table('feedbackForm');
  console.log(body);
  ctx.body = body;
}

module.exports = {
  post,
  get
}
