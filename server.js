require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const express = require("express");
// const CaptainsLog = require(".models/captainsLog.js");

const app = express();
const Port = 5008;

// CONNECTING TO DATABASE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// DATABASE MESSENGER
const db = mongoose.connection;
// MAKE SURE DATABVASE IS CONNECTED
db.once("open", () => console.log("Captain,... we've concatenated with our database!"));
// ERROR EVENT MESSENGER
db.on("error", error => console.log(`Captain! Our database can't take too much more of this ${error.messsage}!`));
// CLOSE EVENT MESSENGER
db.addListener("close", () => console.log("The database has been disconnected, Captain."));

// VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log("Captain! Our middleware has been instantiated!");
    next();
});
// POST-REQUEST-BODY MAINTENANCE
app.use(express.urlencoded({extended: false}));
// ENSURE USABILITY OF HTTP VERBS (LIKE "PUT" AND "DELETE")
app.use(methodOverride("_method"));

// LISTENER
app.listen(Port, (req, res) => {
    console.log(`Our ship docks and deports from Port ${Port}.`)
});

// ROUTES--

// HOME PAGE
app.get("/", (req, res) => {
    res.render("Home", {});
});

// NEW ROUTE
app.get("/logs/new", (req, res) => {
    res.render("New");
})