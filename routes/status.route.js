const statusController = require("../controllers/status.controller")

module.exports = function(app, base_api) {
  app.get(base_api + "/status", statusController.getAll);
}
