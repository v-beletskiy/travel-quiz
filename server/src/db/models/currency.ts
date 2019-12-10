export {};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencySchema = new Schema({
    baseCurrency: {
        type: String,
        default: 'USD',
    },
    tourCurrency: {
        type: String,
        default: 'RUB',
    },
    currencyBaseToTourRate: Number,
})
const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
