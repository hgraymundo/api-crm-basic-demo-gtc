const processController = require("../controllers/process.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/process", processController.create)
  app.get(base_api +  "/process", processController.getAll)
}
