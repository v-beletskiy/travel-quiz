export { };
import { Request, Response } from 'express';
import axios from 'axios';
const Currency = require('../db/models/currency');


async function fillCurrencyDB(req: Request, res: Response) {
    try {
        const currency = new Currency({
            baseCurrency: 'USD',
            tourCurrency: 'RUB',
            currencyBaseToTourRate: 0,
        })
        await currency.save();
        res.status(200).json('Currency data has been saved to DB succesfully!');
    } catch(e) {
        res.status(500).json({ mes: 'Can\'t fill currencies', err: e });
    }
}

module.exports = {
    fillCurrencyDB,
}
