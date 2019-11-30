const CronJob = require('cron').CronJob;
import axios from 'axios';
const City = require('../db/models/city');

const updateWeather = async () => {
    try {
        const cities = await City.find({});
        let delay = 0;
        const getCityWeatherPromises = cities.map(async (city: any) => {
            return new Promise((res, rej) => {
                setTimeout(async () => {
                    try {
                        const latitude = city.coords.lat;
                        const longitude = city.coords.lng;
                        const data: any = await axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${latitude},${longitude}?units=si&exclude=currently,minutely,hourly,alerts,flags`);
                        if (data.status === 200) {
                            const weatherData = data.data;
                            const temperature = weatherData.daily.data[0].temperatureMax;
                            city.weather.temperature = parseInt(temperature);
                            await city.save();
                            res();
                        } else {
                            rej();
                        }
                    } catch (err) {
                        console.error(`Something went wrong, while getting ${city.city} city weather`);
                        rej();
                    }
                }, delay);
                delay += 2000;
            })
        });
        Promise.all(getCityWeatherPromises)
            .then(() => console.log('Weather has been updated successfully for all cities!'))
            .catch(err => console.error('Something went wrong, while updating weather of cities.', err));

    } catch (err) {
        console.error('Can\'t update cities\' weather.', err);
    }
}

module.exports.start = () => {
    const job = new CronJob({
        cronTime: '0 0 5 * * *',
        onTick: updateWeather,
        timeZone: 'Europe/London',
    });
    job.start();
}
