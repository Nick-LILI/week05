let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let db = [];

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static("public/images"));
app.use(express.static("public/styles"));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/", (_, res) => {
    res.render("index.html");
});

app.get("/addcustomer.html", (_, res) => {
    res.render("addcustomer.html");
});

app.get("/allcustomers.html", (_, res) => {
    res.render("allcustomers.html", { customers: db });
});

app.post("/newCustomer", (req, res) => {
    console.log(req.body);
    db.push(req.body);
    res.render("addcustomer.html", { customers: db });
});

app.listen(8080);