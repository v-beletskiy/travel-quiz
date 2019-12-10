const mongoose = require("mongoose");
require('dotenv').config();

const DBconnection = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => console.log('Successfully connected to DB!'))
        .catch((err: any) => { if(err) { console.error('Couldn\'t connect to DB.', err) } })
}

module.exports = DBconnection;
