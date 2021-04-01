const express = require("express");

const app = express();
const port = 3003;
const middleware = require("./middleware");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Paul:dbUserPassword@cluster0.wk3jc.mongodb.net/SakuraChatDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log("DB Connection Error" + err));

const server = app.listen(port, () => console.log("Listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const loginRoute = require("./routes/loginRoutes");
const registerRoute = require("./routes/registerRoutes");

app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
  var payload = {
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});
