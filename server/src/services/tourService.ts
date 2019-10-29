import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const getPhotosByCity = async (cityf: String) => {
    let city = 'Rome';
    const photoURLs: string[] = [];
    const photos: any = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${city.toLowerCase()}
        &image_type=photo&category=travel&min_height=400&min_width=600&order=popular`);
    if (photos.data && photos.data.hits.length) {
        photos.data.hits.forEach((item: any, i: Number) => {
            if(i < 20) {
                photoURLs.push(item.largeImageURL);
            }
        });
    }
    if(photoURLs.length) {
        //store in tour collection (photos field)
    }
}

module.exports = {
    getPhotosByCity,
}
