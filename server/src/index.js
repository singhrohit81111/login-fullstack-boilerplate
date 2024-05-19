const connectDB = require("./db");
const app = require("./app");
const env = require("dotenv");

env.config({
  path: "../.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running successfully on PORT:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Server is not running`);
  });
