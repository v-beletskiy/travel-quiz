import axios from 'axios';
import { natureType, restType } from '../reducers/types/app';

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
}
