const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: String,
    userID: String,
    leaderBoard: String,
    money: Number,
    xp: Number,
    daily: Number,
    leftHand: String,
    rightHand: String,
    healthPoints: Number,
    speed: Number,
    pack: Array,
    health: Number,
})

module.exports = mongoose.model("Data", dataSchema);