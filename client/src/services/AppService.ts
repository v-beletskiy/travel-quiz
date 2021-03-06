import axios from 'axios';
import { tourData } from './types/AppService';

const getHeaders = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }
    return headers;
}


export default class AppService {
    static getSuitableCitiesByParams = async (temperature: number, nature: any, restTypes: any) => {
        try {
            const cities = await axios.post(`${process.env.SERVER_ORIGIN}/api/find-appropriate-cities-for-rest`,
                { temperature: temperature, nature: nature, restTypes: restTypes }, { headers: getHeaders() }
            );
            return cities.data ? cities.data : null;
        } catch (err) {
            console.error(err);
        }
    }

    static getCityImages = async (cityName: string) => {
        try {
            const cityImages = await axios.get(`${process.env.SERVER_ORIGIN}/api/city-photos?cityName=${cityName}`, { headers: getHeaders() });
            return cityImages.data ? cityImages.data : null;
        } catch (err) {
            console.error(err);
        }
    }

    static getSuitableTours = async (tourData: tourData) => {
        try {
            const tours = await axios.post(`${process.env.SERVER_ORIGIN}/api/find-tour-by-city`, tourData, { headers: getHeaders() });
            return tours.data ? tours.data : null;
        } catch (err) {
            console.error(err);
        }
    }
}
