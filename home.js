
exports.handleIncoming = function(app) {
  console.log(app.getRawInput());
  // app.tell('Hello, Father.');
  // const actionMap = new Map();
  // actionMap.set(app.StandardIntents.MAIN, mainIntent);
  // app.handleRequest(actionMap);
};

function mainIntent(app) {
  app.tell('Hello, Father.');
}