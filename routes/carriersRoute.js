const express = require("express");
const router = express.Router();
const Carrier = require("../models/carrierModel");


router.route("/createCarrier").post((req, res) => {
    const { carrierCode, carrierLongCode, carrierName, carrierPrefix } = req.body;

    const newCarrier = new Carrier({
        carrierCode,
        carrierLongCode,
        carrierName,
        carrierPrefix
    })

    newCarrier.save();
})

router.route("/carriers").get((req, res) => {
    Carrier.find()
        .then(foundCarriers => res.json(foundCarriers))
})


module.exports = router;
