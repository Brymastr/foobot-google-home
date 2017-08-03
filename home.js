
exports.handleIncoming = function(app) {
  console.log(app);
  const actionMap = new Map();
  actionMap.set(app.StandardIntents.MAIN, mainIntent);
  app.handleRequest(actionMap);
};

function mainIntent(app) {
  app.tell('Hello, Father.');
}