const express = require("express");
const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
const app = express();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Send Email
// app.post("/send", (req, res) => {
//     var output = `
//         YOU HAVE A NEW CONTACT REQUEST!
//         ---------------------------------------------------------
//         Contact Details
//         ---------------------
//         First Name: ${req.body.firstname}
//         Last Name: ${req.body.lastname}
//         Email: ${req.body.email}
//         Message:
//         ${req.body.text}
//     `;

//     var transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "nem.dan.93@gmail.com",
//             pass: "nemanja123"
//         }
//     });

//     var mailOption = {
//         from: req.body.email,
//         to: "nemanja.danev.93@gmail.com",
//         subject: req.body.subject,
//         text: output
//     };

//     transporter.sendMail(mailOption, function(error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//     });

//     res.redirect("/contact");
// });

app.listen(process.env.PORT || 3000);
