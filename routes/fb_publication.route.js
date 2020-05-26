const publicationController = require("../controllers/publication.controller")

module.exports = function(app, base_api) {
  app.post(base_api + "/fb_publication", publicationController.create);
  app.get(base_api + "/fb_publication/:id", publicationController.getById);
}

// {
// 	"post_id": "102146534842861", 
// 	"text": "Primer post en malinchi page", 
// 	"post_text": "Primer post en malinchi page", 
// 	"shared_text": "", 
// 	"time": datetime.datetime(2020, 5, 13, 13, 21, 29), 
//   "image": None, 
//   "likes": 1, 
// 	"comments": 18, 
// 	"shares": 0, 
// 	"post_url": "https://m.facebook.com/story.php?story_fbid=102146534842861&id=102143714843143", 
// 	"link": None
	
// }
