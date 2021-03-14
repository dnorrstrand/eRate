const express = require("express");
const router = express.Router();
const Airport = require("../models/airportModel");


router.route("/createAirport").post((req, res) => {
    const { airportCode, airportName, country, area } = req.body;

    const newAirport = new Airport({
        airportCode,
        airportName,
        country,
        area
    })

    newAirport.save();
})

router.route("/airports").get((req, res) => {
    Airport.find()
        .then(foundAirports => res.json(foundAirports))
})


module.exports = router;
