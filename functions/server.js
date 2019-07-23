const app = require("express")();
const { hello, post } = require("./routes/hello");

app.get("/hello", hello);
app.post("/hello", post);

module.exports = app;
