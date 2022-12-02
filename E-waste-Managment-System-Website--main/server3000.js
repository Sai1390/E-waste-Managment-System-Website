let express = require("express")
let path = require("path")
let app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {

    res.render("index", {})
})
app.get("/aboutus.ejs", (req, res) => {


    res.render("aboutus", {

    })
})

app.get("/profile.ejs", (req, res) => {

    res.render("profile", {
        "name": "Jeydev",
        "Email": "Jeyadev.meka3112@gmail.com",
        "FirstName": "Jeyadev",
        "LastName": "Meka",
        "Address": "Gurgoan,BML Munjal University",
        "Description": "HumanBeing With a Golden Heart"
    })
})

app.get("/chatbot.ejs", (req, res) => {

    res.render("chatbot", {


    })
})
app.get("/complaintlist.ejs", (req, res) => {

    res.render("complaintlist", {

    })
})

app.get("/complaintpage.ejs", (req, res) => {

    res.render("complaintpage", {

    })
})
app.get("/home.ejs", (req, res) => {

    res.render("home", {

    })
})
app.get("/login.ejs", (req, res) => {

    res.render("login", {

    })
})

app.get("/index.ejs", (req, res) => {

    res.render("index", {

    })
})

app.get("/testimonials.ejs", (req, res) => {

    res.render("testimonials", {

    })
})










app.listen("3000", () => {
    console.log("connected to server....")
    console.log(__dirname)
    console.log(path.join(__dirname, "views"))
})