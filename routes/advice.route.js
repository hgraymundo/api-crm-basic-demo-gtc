const adviceController = require("../controllers/advice.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/advice", adviceController.create);
  app.get(base_api + "/advice", adviceController.getAll);

}
