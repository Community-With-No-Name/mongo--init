var express = require('express');
var router = express.Router();
var IndexController = require("../controllers/IndexController")
router.get('/', IndexController.getHome)
router.get('/foods', IndexController.getFoods)
router.get('/foods/:id', IndexController.getFood)
router.get('/login', IndexController.getLogin)
router.get('/register', IndexController.getRegister)
router.post("/login", IndexController.getLoginData)
router.get("/add-food", IndexController.getAddFood)
router.get("/get-foods", IndexController.getUsersFoods)
router.post("/add-food", IndexController.postAddFood)
module.exports = router;
