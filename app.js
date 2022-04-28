const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
	var data = {
		context: [
			{task:"feed cats"},
			{task:"apartment shop"},
			{task:"play RuneScape"},
			{task:"grocery shopping"},
			{task:"make bed"}
		]
	}
  res.render("index", data);
});

app.get("/about", (req, res) => {
	res.render("about", { title: "Hey", message: "Hello there!" });
});


app.get("/other", (req, res) => {
	res.render("other");
});

app.listen(process.env.port || 3000);

console.log(`Server running at http://127.0.0.1:3000/`);