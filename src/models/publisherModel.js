const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema ({

    publisher_name: String,
    headQuarter: String

},{timestamp: true})

module.exports = mongoose.model("Publisher", publisherSchema)
