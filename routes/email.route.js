const emailController = require("../controllers/email.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/email", emailController.send);
}
