const
  Router = require('koa-router'),
  router = new Router(),
  config = require('./config')();

router.get('/', async ctx => {
  ctx.body = `Hey it's me!`;
});

router.get('/url', async ctx => {
  ctx.body = process.env.FOOBOT_GOOGLE_HOME_URL;
});

module.exports = router.routes();