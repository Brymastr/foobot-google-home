const
  Router = require('koa-router'),
  router = new Router(),
  config = require('./config')(),
  home = require('./home'),
  ActionsSdkApp = require('actions-on-google').ActionsSdkApp;


router.all('/', async ctx => {
  const actions = new ActionsSdkApp({request: ctx.request, response: ctx.response});
  console.log(actions.getRawInput());
  ctx.status = 200;
  actions.tell('Hello, Father.');

  // ctx.body = home.handleIncoming(app);
});

router.get('/url', async ctx => {
  ctx.body = process.env.FOOBOT_GOOGLE_HOME_URL;
});

module.exports = router.routes();