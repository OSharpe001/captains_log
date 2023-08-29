
// ROUTES--

// HOME PAGE
const homePageRoute = app.get("/", (req, res) => {
    res.render("Home", {});
});

// LOG-LIST ROUTE (TRUE INDEX)
const logListRoute = app.get("/logs", async (req, res) => {
    const logsList = await CaptainsLog.find({})
    res.render("Index", {
        logs: logsList
    });
});

// NEW ROUTE
const newEntryRoute = app.get("/logs/new", (req, res) => {
    res.render("New");
});

// CREATE ROUTING FOR NEW LOGS
const createNewEntryRoute = app.post("/logs", async (req,res) => {
    req.body.shipIsBroken === "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await CaptainsLog.create(req.body);
    res.redirect("/logs/Show");
});

// SHOW ROUTE
const showRoute = app.get("/logs/:id", async (req, res) => {
    const thisLog = await CaptainsLog.findById(req.params.id);
    res.render("Show", {
        log: thisLog
    });
});

// EDIT ROUTE
const editRoute = app.get("/logs/:id/edit", async (req, res) => {
    const editedLog = await CaptainsLog.findById(req.params.id);
    res.render("Edit", {
        log: editedLog
    });
});

// UPDATE ROUTE
const updateRoute = app.put("/logs/:id", async (req, res) => {
    req.body.shipIsBroken === "on" ? req.body.shipIsBroken = true : req.body.shipIsBroken = false;
    await CaptainsLog.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
});

// DELETE ROUTE
const deleteRoute = app.delete("/logs/:id", async (req, res) => {
    await CaptainsLog.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
});

module.exports = homePageRoute;
module.exports = logListRoute;
module.exports = newEntryRoute;
module.exports = createNewEntryRoute;
module.exports = showRoute;
module.exports = editRoute;
module.exports = updateRoute;
module.exports = deleteRoute;