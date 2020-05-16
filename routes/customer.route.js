const customerController = require("../controllers/customer.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/customer", customerController.create);
}
