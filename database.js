const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(
        "mongodb+srv://Paul:dbUserPassword@cluster0.wk3jc.mongodb.net/SakuraChatDB?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("DB Connection Successful");
      })
      .catch((err) => {
        console.log("DB Connection Error" + err);
      });
  }
}
module.exports = new Database();
