const mongoose = require("mongoose");

main()
  .then((r) => {
    console.log("Connected to DB successfully");
    handleSuccess(r);
  })
  .catch((err) => {
    console.log("Error connecting to DB ", err);
    handleError();
  });

async function main() {
  return await mongoose.connect(
    // "mongodb+srv://Pranjul120568:pranjul@cluster0.7jfm9sx.mongodb.net/?retryWrites=true&w=majority"
    "mongodb://localhost:27017/myapp"
  );
}

function handleSuccess(db) {
  module.exports = db;
}

function handleError() {
  module.exports = null;
}
