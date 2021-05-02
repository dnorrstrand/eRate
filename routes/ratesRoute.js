const express = require("express");
const router = express.Router();
const Rate = require("../models/rateModel");


router.route("/createRate").post((req, res) => {
    const {
        forCarrier,
        currency,
        contact,
        revisedDate,
        expired,
        origin,
        originZone,
        dest,
        destZone,
        transitAirport,
        transitCarrier,
        fromDate,
        untilDate,
        rateCode,
        kgLb,
        sellBuy,
        prepaidCollect,
        salesRegion,
        dealCode,
        reference,
        priceClass,
        serviceLevel,
        flightGroup,
        uldType,
        shcAddon,
        priceTemplate,
        allotPrice,
        weekday,
        premium,
        shipper,
        agent,
        remarksInt,
        remarksExt,
        minAmount,
        n,
        q45,
        q100,
        q300,
        q500,
        q1000,
        q3000,
        allIn
    } = req.body;

    const newRate = new Rate({
        forCarrier,
        currency,
        contact,
        revisedDate,
        expired,
        origin,
        originZone,
        dest,
        destZone,
        transitAirport,
        transitCarrier,
        fromDate,
        untilDate,
        rateCode,
        kgLb,
        sellBuy,
        prepaidCollect,
        salesRegion,
        dealCode,
        reference,
        priceClass,
        serviceLevel,
        flightGroup,
        uldType,
        shcAddon,
        priceTemplate,
        allotPrice,
        weekday,
        premium,
        shipper,
        agent,
        remarksInt,
        remarksExt,
        minAmount,
        n,
        q45,
        q100,
        q300,
        q500,
        q1000,
        q3000,
        allIn
    });

    newRate.save();
    res.send();
})

router.route("/rates").get((req, res) => {
    Rate.find()
        .then(foundRates => res.json(foundRates))
})

module.exports = router;
