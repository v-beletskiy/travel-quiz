const mongoose = require("mongoose");
require('dotenv').config();

const DBconnection = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
        .then(() => console.log('Successfully connected to DB!'),
        (err: any) => { if(err) { throw err } });
}

module.exports = DBconnection;
