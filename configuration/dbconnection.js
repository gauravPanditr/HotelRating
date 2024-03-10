const mongoose = require("mongoose");

const dbConnected = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONODB_URL);
        console.log("DB Connected");
    } catch (err) {
        console.error("Not Connected: " + err);
    }
};

  



module.exports = dbConnected;
