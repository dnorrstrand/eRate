const mongoose = require("mongoose");

const ratesSchema = {
    origin: String,
    originZone: String,
    dest: String,
    destZone: String,
    transitAirport: String,
    transitCarrier: String,
    fromDate: Date,
    untilDate: Date,

    rateCode: String,
    kgLb: String,
    contact: String,
    sellBuy: String,
    remarksInt: String,
    remarksExt: String,
    salesRegion: String,
    currency: String,
    forCarrier: String,
    serviceLevel: String,
    agent: String,
    dealCode: String,
    shipper: String,
    priceTemplate: String,
    priceClass: String,
    prepaidCollect: String,
    uldType: String,
    flightGroup: String,
    weekday: String,
    premium: String,
    reference: String,
    shcAddon: String,
    allotPrice: String,
    minAmount: Number,
    n: Number,
    q45: Number,
    q100: Number,
    q300: Number,
    q500: Number,
    q1000: Number,
    q3000: Number,
    allIn: Boolean,
    expired: Boolean,
    revisedDate: Date
};

const Rate = mongoose.model("Rate", ratesSchema);

module.exports = Rate;