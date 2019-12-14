export { };
import { Request, Response } from 'express';
import axios from 'axios';
const City = require('../db/models/city');
import fillDBWithCities from '../db/scriptsToFillDB/cityData';

async function getSuitableCitiesByParams(req: Request, res: Response) {
    try {
        const { temperature, nature, restTypes } = req.body;
        const maxTemperature = temperature + 5;
        const minTemperature = temperature - 5;
        const cities = await City.find({
            'weather.temperature': { $lt: maxTemperature, $gt: minTemperature },
            $or: [{ natureTags: { $in: nature } }, { restTypesTags: { $in: restTypes } }],
        });
        const cityNames = cities.map((city: any) => {
            return ({
                name: city.city,
                temperature: city.weather.temperature,
                img: city.imgPreviewName,
            });
        });
        res.status(200).json(cityNames);
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: 'Can\'t find appropriate cities for your rest.', err: err });
    }
}

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
        console.log(err);
        responce.status(500).json({ mes: 'Can\'t get cities\' coordinates by names.', err: err });
    }
}

async function fillDB(req: Request, res: Response) {
    try {
        await fillDBWithCities();
        res.status(200).json('All the cities\' data has been saved to DB succesfully!');
    } catch(e) {
        res.status(500).json({ mes: 'Something went wrong, while attempting to fill DB with cities\' data.', err: e });
    }
}

async function getCityPhotos(req: Request, res: Response) {
    try {
        const { cityName } = req.query;
        const city = await City.findOne({ city: cityName });
        res.status(200).json(city.photos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: 'Can\'t get cities\' photos.', err: err });
    }
}

module.exports = {
    getSuitableCitiesByParams,
    getCityCoordsByName,
    fillDB,
    getCityPhotos,
}
