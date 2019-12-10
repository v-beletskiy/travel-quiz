const CronJob = require('cron').CronJob;
import axios from 'axios';
const Currency = require('../db/models/currency');

const updateCurrencyExchangeRate = async () => {
    try {
        const data: any = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=USD,RUB&base=USD`);
        if (data.status === 200) {
            const currencyExchangeRate = Number(data.data.rates.RUB.toFixed(2));
            await Currency.findOneAndUpdate({ baseCurrency: 'USD', tourCurrency: 'RUB' }, { currencyBaseToTourRate: currencyExchangeRate });
        } else {
            console.error('Can\'t update currency exchange rate.');
        }
    } catch (err) {
        console.error('Can\'t update currency exchange rate.', err);
    }
}

module.exports.start = () => {
    const job = new CronJob({
        cronTime: '0 0 5 * * *',
        onTick: updateCurrencyExchangeRate,
        timeZone: 'Europe/London',
    });
    job.start();
}
