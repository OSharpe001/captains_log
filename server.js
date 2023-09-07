require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const express = require("express");

// GRABBING BODY-PARSER MIDDLEWARE
const bodyParser = require("body-parser");
const CaptainsLog = require("./models/logs.js");

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
db.once("open", () => console.log("Captain,... we've concatenated our database!"));
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
// BODY-PARSER
app.use(bodyParser.json());
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

// LOG-LIST ROUTE (TRUE INDEX)
app.get("/logs", async (req, res) => {
    const logsList = await CaptainsLog.find({})
    res.render("Index", {
        logs: logsList
    });
});

// NEW ROUTE
app.get("/logs/new", (req, res) => {
    res.render("New");
});

// CREATE ROUTING FOR NEW LOGS
app.post("/logs", async (req,res) => {
    req.body.shipIsBroken === "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await CaptainsLog.create(req.body);
    res.redirect("/logs/Show");
});

// SHOW ROUTE
app.get("/logs/:id", async (req, res) => {
    const thisLog = await CaptainsLog.findById(req.params.id);
    res.render("Show", {
        log: thisLog
    });
});

// EDIT ROUTE
app.get("/logs/:id/edit", async (req, res) => {
    const editedLog = await CaptainsLog.findById(req.params.id);
    res.render("Edit", {
        log: editedLog
    });
});

// UPDATE ROUTE
app.put("/logs/:id", async (req, res) => {
    req.body.shipIsBroken === "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await CaptainsLog.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
});

// DELETE ROUTE
app.delete("/logs/:id", async (req, res) => {
    await CaptainsLog.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
});

// const homePageRoute = require("homePageRoute");
// const logListRoute = require("logListRoute");
// const newEntryRoute = require("newEntryRoute");
// const createNewEntryRoute = require("createNewEntryRoute");
// const showRoute = require("showRoute");
// const editRoute = require("editRoute");
// const updateRoute = require("updateRoute");
// const deleteRoute = require("deleteRoute");
