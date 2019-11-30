export { };
import { Request, Response } from 'express';
import axios from 'axios';
const City = require('../db/models/city');

async function getCityCoordsByName(request: Request, responce: Response) {
    try {
        const cities = await City.find({});
        let delay = 0;
        const getCityCoordsPromises = cities.map(async (city: any) => {
            return new Promise((res, rej) => {
                setTimeout(async () => {
                    try {
                        const data: any = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city.city},${city.country}
                            &key=${process.env.OPENCAGE_API_KEY}`);
                        if (data.status === 200) {
                            const cityData = data.data;
                            const cityCoords = cityData.results[0].geometry;
                            city.coords = cityCoords;
                            await city.save();
                            res();
                        } else {
                            rej();
                        }
                    } catch (err) {
                        console.error(`Something went wrong, while getting ${city.city} city coords`);
                        rej();
                    }
                }, delay);
                delay += 2000;
            })
        });
        Promise.all(getCityCoordsPromises)
            .then(() => responce.status(200).json('Cities\' coordinates have been updated successfully.'))
            .catch(err => responce.status(500).json({ mes: 'Can\'t get cities\' coordinates by names.', err: err }));
    } catch (err) {
        console.log(err)
        responce.status(500).json({ mes: 'Can\'t get cities\' coordinates by names.', err: err });
    }
}

module.exports = {
    getCityCoordsByName,
}
