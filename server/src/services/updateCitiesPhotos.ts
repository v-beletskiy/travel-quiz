import axios from 'axios';
import { Stream } from 'stream';
import fs = require('fs');
const path = require('path');
const CronJob = require('cron').CronJob;
const City = require('../db/models/city');
import Utils from '../utils/utils';

const updateCitiesPhotos = async () => {
    try {
        const cities = await City.find({});
        let delay = 0;
        const getCitiesPhotosPromises = cities.map(async (city: any) => {
            return new Promise((res, rej) => {
                setTimeout(async () => {
                    try {
                        const photos: any = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${city.city.toLowerCase()}
                            &image_type=photo&category=travel&min_height=400&min_width=600&order=popular`);
                        if (photos.data && photos.data.hits.length) {
                            const photoPromises: Promise<{ photoStream: Stream, city: string, number: number }>[] = [];
                            photos.data.hits.forEach(async (item: any, i: Number) => {
                                if (i < 20) {
                                    const photoPromise: any = new Promise(async (resolve, reject) => {
                                        const photoStream = await axios({ url: item.largeImageURL, responseType: 'stream' });
                                        if (photoStream.status !== 200) reject();
                                        resolve({ photoStream: photoStream.data, city: city.city, number: i });
                                    })
                                    photoPromises.push(photoPromise);
                                }
                            });
                            Promise.all(photoPromises)
                                .then(photoData => {
                                    const photoStreamPromises: any = [];
                                    const photoURLs: string[] = [];
                                    photoData.forEach(photo => {
                                        const photoStreamPromise: Promise<Stream> = new Promise(async (resolve, reject) => {
                                            const cityFolderName = Utils.removeStringGaps(photo.city);
                                            const cityFolderPath = path.resolve(__dirname, `../../upload/cityImages/${cityFolderName}`);
                                            const photoPath = path.resolve(__dirname, `../../upload/cityImages/${cityFolderName}/${photo.number}.jpg`);
                                            const writePhotoToFolder = (photo: { photoStream: Stream, city: string, number: number }) => {
                                                return (
                                                    photo.photoStream.pipe(fs.createWriteStream(photoPath))
                                                        .on('finish', () => {
                                                            const photoURL = `/upload/cityImages/${cityFolderName}/${photo.number}.jpg`;
                                                            photoURLs.push(photoURL);
                                                            resolve();
                                                        })
                                                        .on('error', () => reject())
                                                )
                                            }
                                            try {
                                                fs.access(cityFolderPath, fs.constants.R_OK | fs.constants.W_OK, async (err: any) => {
                                                    if (err) {
                                                        await fs.promises.mkdir(cityFolderPath, { recursive: true });
                                                    }
                                                    writePhotoToFolder(photo);
                                                });
                                            } catch (err) {
                                                console.log('Folder accessibility problems.', err);
                                            }
                                        })
                                        photoStreamPromises.push(photoStreamPromise);
                                    })
                                    Promise.all(photoStreamPromises)
                                        .then(async () => {
                                            if (photoURLs.length) {
                                                city.photos = photoURLs;
                                                await city.save();
                                                console.log('City photos has been stored successfully!');
                                                res();
                                            }
                                        })
                                        .catch((err) => console.error(`Something went wrong, while storing city photos`, err))
                                })
                                .catch(err => console.error(`Something went wrong, while getting city photos`, err))
                        }
                    } catch (err) {
                        console.error(`Something went wrong, while getting ${city.city} city photos`, err);
                        rej();
                    }
                }, delay)
                delay += 2000;
            })
        })
        Promise.all(getCitiesPhotosPromises)
            .then(() => console.log('Photos has been updated successfully for all cities!'))
            .catch(err => console.error('Something went wrong, while updating photos of cities.', err));
    } catch (err) {
        console.error('Can\'t update cities\' photos.', err);
    }
}

module.exports.start = () => {
    const job = new CronJob({
        cronTime: '0 0 5 * * *',
        onTick: updateCitiesPhotos,
        timeZone: 'Europe/London',
    });
    job.start();
}
