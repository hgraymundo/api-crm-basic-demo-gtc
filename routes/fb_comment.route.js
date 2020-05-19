const FBCommentController = require("../controllers/fb_comment.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/fb_comment", FBCommentController.create);
  app.get(base_api + "/fb_comment", FBCommentController.getAll);

}
