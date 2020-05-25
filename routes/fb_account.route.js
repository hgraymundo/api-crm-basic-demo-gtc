const FBAccountController = require("../controllers/fb_account.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/fb_account", FBAccountController.create);
  app.get(base_api + "/fb_account", FBAccountController.getAll);
}

// https://www.facebook.com/chuchosesma/
// htttp://www.facebook.com/TereRamosArreola/
// htttp://www.facebook.com/AlessandraRdIV/