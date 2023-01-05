const app = require("./app.js");

//configuration
require("dotenv").config();

const PORT = process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
