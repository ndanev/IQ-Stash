const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setup template engine
app.set("view engine", "ejs");

// setup static files
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let data = {
        title: "We got the good stuff!",
        subtitle: "Explore our showcased products below.."
    };

    res.render("index", { data: data });
});

app.get("/contact", (req, res) => {
    let data = {
        title: "Contact Us!",
        email: "office@iqstash.com",
        phone: "+381 66 585 07 92",
        whatsapp: "+381 66 9159702"
    };

    res.render("contact", { data: data });
});

app.listen(process.env.PORT || 3000);
