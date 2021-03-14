const mongoose = require("mongoose");

const carrierSchema = {
    carrierCode: String,
    carrierLongCode: String,
    carrierName: String,
    carrierPrefix: String
}

const Carrier = mongoose.model("Carrier", carrierSchema);

module.exports = Carrier;