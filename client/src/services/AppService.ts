import axios from 'axios';
import { natureType, restType } from '../reducers/types/app';
import { tourData } from './types/AppService';

export default class AppService {
    static getSuitableCitiesByParams = async (temperature: number, nature: any, restTypes: any) => {
        try {
            const cities = await axios.post(`${process.env.LOCAL_URL}/api/find-appropriate-cities-for-rest`,
                { temperature: temperature, nature: nature, restTypes: restTypes }
            );
            return cities.data ? cities.data : null;
        } catch (err) {
            console.error(err);
        }
    }

    static getSuitableTours = async (tourData: tourData) => {
        try {
            const tours = await axios.post(`${process.env.LOCAL_URL}/api/find-tour-by-city`, tourData);
            return tours.data ? tours.data : null;
        } catch (err) {
            console.error(err);
        }
    }
}
