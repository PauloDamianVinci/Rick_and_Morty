const router = require("express").Router();
// Controllers:
const getCharById = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
// rutas:
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.put("/fav/:id", deleteFav);

module.exports = router;
