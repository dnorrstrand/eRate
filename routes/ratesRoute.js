const express = require("express");
const router = express.Router();
const Rate = require("../models/rateModel");


router.route("/createRate").post((req, res) => {
    const { rateCode, kgLb } = req.body;
    {/*, contact, sellBuy, remarksInt, remarksExt, salesRegion, currency, forCarrier, serviceLevel, agent, dealCode, shipper,
        originZone, origin, destZone, dest, priceTemplate, fromDate, untilDate, priceClass, prepaidCollect, uldType, flightGroup, weekday, transitAirport,
        transitCarrier, premium, reference, shcAddon, allotPrice, minAmount, n, q45, q100, q300, q500, q1000, q3000, allIn, expired, revisedDate */}

    const newRate = new Rate({
        rateCode,
        kgLb
    })
    {/* contact,
        sellBuy,
        remarksInt,
        remarksExt,
        salesRegion,
        currency,
        forCarrier,
        serviceLevel,
        agent,
        dealCode,
        shipper,
        originZone,
        origin,
        destZone,
        dest,
        priceTemplate,
        fromDate,
        untilDate,
        priceClass,
        prepaidCollect,
        uldType,
        flightGroup,
        weekday,
        transitAirport,
        transitCarrier,
        premium,
        reference,
        shcAddon,
        allotPrice,
        minAmount,
        n,
        q45,
        q100,
        q300,
        q500,
        q1000,
        q3000,
        allIn,
        expired,
        revisedDate */}

    newRate.save();
})

router.route("/rates").get((req, res) => {
    Rate.find()
        .then(foundRates => res.json(foundRates))
})


module.exports = router;
