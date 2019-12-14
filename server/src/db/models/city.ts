export {};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    city: String,
    coords: {
        lat: Number,
        lng: Number,
    },
    cityIdTezTour: Number,
    country: String,
    countryIdTezTour: Number,
    natureTags: Array,
    restTypesTags: Array,
    weather: {
        temperature: Number,
    },
    imgPreviewName: String,
    photos: Array,
})
const City = mongoose.model('City', citySchema);

module.exports = City;
