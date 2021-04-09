const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../schemas/UserSchema");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
router.get("/", (req, res, next) => {
  res.status(200).render("login");
});
router.post("/", async (req, res, next) => {
  let payload = req.body;
  if (req.body.logUsername && req.body.logPassword) {
    let user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    }).catch((error) => {
      console.log(error);
      payload.errorMessage = "Something went wrong.";
      res.status(200).render("login", payload);
    });
  }
  res.status(200).render("login");
});

module.exports = router;
