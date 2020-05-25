const accountController = require("../controllers/account.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/account", accountController.create);
  app.get(base_api + "/account", accountController.getAll);
}
