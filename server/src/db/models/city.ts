export {};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    city: String,
    cityIdTezTour: Number,
    country: String,
    countryIdTezTour: Number,
    natureTags: Array,
    restTypesTags: Array,
})
const City = mongoose.model('City', citySchema);

module.exports = City;
