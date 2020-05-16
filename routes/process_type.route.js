const processTypeController = require("../controllers/process_type.controller")

module.exports = function(app, base_api) {
  app.get(base_api + "/process_type", processTypeController.getAll);
}
