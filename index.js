const
  // Koa = require('koa'),
  // app = new Koa(),
  // bodyParser = require('koa-bodyparser'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  ActionsSdkApp = require('actions-on-google').ActionsSdkApp,
  config = require('./config')(),
  amqp = require('amqplib'),
  request = require('request-promise-native');

app.use(bodyParser.json({type: 'application/json'}));
app.use('/', function(request, response, next) {
  const actions = new ActionsSdkApp({request, response});
  console.log(actions.getRawInput());
  actions.tell('Hello Father.');
})
// app.use(bodyParser({enableTypes: ['json']}));
// app.use(require('./routes'));
main();

async function main() {
  app.listen(config.PORT);
  console.log('google home service ready');
}