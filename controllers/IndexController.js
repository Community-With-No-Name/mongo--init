// const res = require("express/lib/response")
const foods = require("./foods");
const Food = require("../model/Food");
exports.getHome = (req, res) => {
  var users = [
    "Musa",
    "Alberto",
    "Aaron",
    "Matthew",
    "Eniola",
    "Dorcas",
    "Toheeb",
  ];
  res.render("index", {
    title: "Pizzeria 🍕",
    users,
    foods: [foods[0], foods[1], foods[2], foods[3]],
    nav: true,
  });
};
exports.getFoods = (req, res) => {
  res.render("foods", { title: "All Foods🍲", foods, nav: true });
};
exports.getLogin = (req, res) => {
  res.render("login", { title: "Login", nav: false });
};
exports.getRegister = (req, res) => {
  res.render("register", { title: "Register", nav: false });
};
exports.getFood = (req, res) => {
  res.send(req.params.id);
};

exports.getLoginData = (req, res) => {
  console.log(req.body.email);
  res.redirect("/login");
};
exports.getAddFood = (req, res) => {
  res.render("addFood");
};

exports.postAddFood = (req, res) => {
  var { name, price, description } = req.body;
  var NewFood = new Food({
    name,
    price,
    description,
  });
  Food.create(NewFood).then(() => {
    res.redirect("/get-foods");
  });
};
exports.getUsersFoods = async(req,res) => {
    console.log("start")
    await Food.find()
    .then(foods=>{
        console.log(foods)
        res.render("getfoods", {foods})
        console.log("end foods")
    })
    console.log("end")
}