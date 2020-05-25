const pubCommentController = require("../controllers/pub_comment.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/pub_comment", pubCommentController.create);
  app.get(base_api + "/pub_comment/:id", pubCommentController.getAll);

}
