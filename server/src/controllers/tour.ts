export { };
import { Request, Response } from 'express';
import axios from 'axios';
import { departureTime } from '../data/appData';
import Utils from '../utils/utils';
const Tour = require('../db/models/tour');
const City = require('../db/models/city');
const Currency = require('../db/models/currency');

interface tour {
    dateIn: string,
    dateOut: string,
    days: number,
    hotelName: string,
    hotelImg: string,
    price: number,
}

async function getSuitableToursByParams(req: Request, res: Response) {
    const getToursData = (toursWithRubCurrency: any, currencyRate: number) => {
        const tours: tour[] = [];
        toursWithRubCurrency.forEach((tour: any) => {
            const tourData = {
                dateIn: tour[0],
                dateOut: Utils.getPlusDaysDateString(tour[3], tour[0]),
                days: tour[3],
                hotelName: tour[6][1],
                hotelImg: tour[6][2],
                price: Math.floor(+tour[10].total / currencyRate),
            };
            tours.push(tourData);
        });
        return tours;
    }

    try {
        const { cityName, budget, departure, persons } = req.body;
        const city = await City.findOne({ city: cityName });
        const { cityIdTezTour, countryIdTezTour } = city;
        let startDate = Utils.getCurrentDateString(), endDate = '';
        switch (departure) {
            case departureTime.month: {
                endDate = Utils.getPlusDaysDateString(30);
                break;
            }
            case departureTime.later: {
                endDate = Utils.getPlusDaysDateString(180);
                break;
            }
            default: {
                endDate = Utils.getPlusDaysDateString(30);
            }
        }
        const currency = await Currency.findOne({ baseCurrency: 'USD', tourCurrency: 'RUB' });
        const budgetRUB = budget * currency.currencyBaseToTourRate;
        const data: any = await axios.get(`https://search.tez-tour.com/tariffsearch/getResult?tourId=${cityIdTezTour}&countryId=${countryIdTezTour}&after=${startDate}&before=${endDate}&priceMax=${budgetRUB}&priceMin=0&accommodationId=${persons}&currency=8390&formatResult=true`);
        if (data.data) {
            if (data.data.data && data.data.data.length) {
                const toursWithRubCurrency = data.data.data.filter((tour: any) => tour[10].currencyId === 8390);
                const tours: tour[] = getToursData(toursWithRubCurrency, currency.currencyBaseToTourRate);
                res.status(200).json(tours);
            } else {
                const toursWithReplacementString = Utils.getStringWithoutLineBreaks(data.data); //remove line breaks to make json valid
                const parsedTours = JSON.parse(toursWithReplacementString);
                if (parsedTours.data && parsedTours.data.length) {
                    const toursWithRubCurrency = parsedTours.data.filter((tour: any) => tour[10].currencyId === 8390);
                    const tours: tour[] = getToursData(toursWithRubCurrency, currency.currencyBaseToTourRate);
                    res.status(200).json(tours);
                } else {
                    res.status(200).json('No suitable tours found.');
                }
            }
        } else {
            res.status(500).json('Error while tour search');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: 'Error while tour search.', err: err });
    }
}

module.exports = {
    getSuitableToursByParams,
}
