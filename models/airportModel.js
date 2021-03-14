const mongoose = require("mongoose");

const airportSchema = {
    airportCode: String,
    airportName: String,
    country: String,
    area: String
}

const Airport = mongoose.model("Airport", airportSchema);

module.exports = Airport;