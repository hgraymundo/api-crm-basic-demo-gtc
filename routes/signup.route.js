const signupController = require("../controllers/signup.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/signup", signupController.signup);
}
