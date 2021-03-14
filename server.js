require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use("/", require("./routes/notesRoute"));
app.use("/", require("./routes/ratesRoute"));
app.use("/", require("./routes/airportsRoute"));
app.use("/", require("./routes/carriersRoute"));

app.listen(3001, function () {
    console.log("Express server has started and is running on port 3001")
})
