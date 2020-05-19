const publicationController = require("../controllers/publication.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/publication", publicationController.create);
  app.get(base_api + "/publication", publicationController.getAll);

}
