const sendSMSController = require("../controllers/sendSMS.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/sms", sendSMSController.sendSMS);
}
