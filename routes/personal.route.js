const personalController = require("../controllers/personal.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/personal", personalController.create);
  app.get(base_api + "/personal", personalController.getAll);
}
