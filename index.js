const
  Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser'),
  config = require('./config')(),
  amqp = require('amqplib'),
  request = require('request-promise-native'),
  { promisify } = require('util'),
  ngrok = promisify(require('ngrok').connect);

app.use(bodyParser({enableTypes: ['json']}));
app.use(require('./routes'));
main();

async function main() {
  try {
    if(process.env.FOOBOT_GOOGLE_HOME_URL === undefined || process.env.FOOBOT_GOOGLE_HOME_URL === null) {
      // process.env.FOOBOT_TELEGRAM_URL = await ngrok({ addr: config.PORT, authtoken: config.NGROK_TOKEN });
      process.env.FOOBOT_GOOGLE_HOME_URL = await ngrok({ addr: config.PORT });
    }
  } catch(err) {
    console.log(err);
  }
  app.listen(config.PORT);
  console.log('google home service ready');
}

// const actionsSdk = require('actions-on-google').ActionsSdkApp;

// const app = new ActionsSdkApp({
  
// })