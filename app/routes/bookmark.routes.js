const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/bookmark.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {
  // app.use(function(req, res, next) {
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "x-access-token, Origin, Content-Type, Accept"
  //   );
  //   next();
  // });

  // Object.keys(controller).forEach(e => app.get("/api/bookmarks/" + e, [authJwt.verifyToken], controller[e]))


  app.get("/api/bookmarks/getAll", [authJwt.verifyToken], controller.getAll);
  app.get("/api/bookmarks/tags", [authJwt.verifyToken], controller.tags);
  app.get("/api/bookmarks/getOne", [authJwt.verifyToken], controller.getOne);
  app.post("/api/bookmarks/save", [authJwt.verifyToken], controller.save);
};
