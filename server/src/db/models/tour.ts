export {};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    dateIn: Date,
    dateOut: Date,
    days: Number,
    hotelName: String,
    hotelImg: String,
    price: Number,
})
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
