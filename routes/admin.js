var express = require('express');
var router = express.Router();
var IndexController = require("../controllers/IndexController")
router.get('/', IndexController.getHome)
router.get('/foods', IndexController.getFoods)
router.get('/login', IndexController.getLogin)
router.get('/register', IndexController.getRegister)

module.exports = router;
