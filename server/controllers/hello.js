
const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const body = await mysql.select().table('feedbackForm');
  ctx.state.data = {
  msg: JSON.stringify(body) + "Hello World !"
  }
}