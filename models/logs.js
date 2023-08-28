const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const logsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        entry: {
            type: String,
            required: true,
        },
        shipIsBroken: {
            type: Boolean,
            default: true
        },
    },
    {timestamps: true},
);

const CaptainsLog = model("Logs", logsSchema);

module.exports = CaptainsLog;