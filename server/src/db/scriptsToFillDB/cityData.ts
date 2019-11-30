export { };
const City = require('../models/city');
import { natureTags, restTypeTags } from './tagsForCityData';

const fillDBWithCities = () => {
    const city1 = new City({
        city: 'Abu Dhabi',
        cityIdTezTour: 7067153,
        country: 'UAE',
        countryIdTezTour: 7067149,
        natureTags: [natureTags.desert, natureTags.water],
        restTypeTags: [restTypeTags.exotic],
    })
    city1.save();
    const city2 = new City({
        city: 'Dubai',
        cityIdTezTour: 7067156,
        country: 'UAE',
        countryIdTezTour: 7067149,
        natureTags: [natureTags.desert, natureTags.water],
        restTypeTags: [restTypeTags.exotic],
    })
    city2.save();
    const city3 = new City({
        city: 'Fujairah',
        cityIdTezTour: 7067155,
        country: 'UAE',
        countryIdTezTour: 7067149,
        natureTags: [natureTags.desert, natureTags.water],
        restTypeTags: [restTypeTags.exotic],
    })
    city3.save();
    const city4 = new City({
        city: 'Vienna',
        cityIdTezTour: 147579,
        country: 'Austria',
        countryIdTezTour: 147573,
        natureTags: [natureTags.forest],
        restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
    })
    city4.save();
    const city5 = new City({
        city: 'Agia Napa',
        cityIdTezTour: 7067683,
        country: 'Cyprus',
        countryIdTezTour: 7067673,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city5.save();
    const city6 = new City({
        city: 'Larnaca',
        cityIdTezTour: 7067674,
        country: 'Cyprus',
        countryIdTezTour: 7067673,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city6.save();
    const city7 = new City({
        city: 'Limassol',
        cityIdTezTour: 7067681,
        country: 'Cyprus',
        countryIdTezTour: 7067673,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city7.save();
    const city8 = new City({
        city: 'Nicosia',
        cityIdTezTour: 287332,
        country: 'Cyprus',
        countryIdTezTour: 7067673,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city8.save();
    const city9 = new City({
        city: 'Karlovy Vary',
        cityIdTezTour: 529485,
        country: 'Czech Republic',
        countryIdTezTour: 160930,
        natureTags: [natureTags.forest],
        restTypeTags: [restTypeTags.resort],
    })
    city9.save();
    const city10 = new City({
        city: 'Prague',
        cityIdTezTour: 537102,
        country: 'Czech Republic',
        countryIdTezTour: 160930,
        natureTags: [],
        restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
    })
    city10.save();
    const city11 = new City({
        city: 'Boca Chica',
        cityIdTezTour: 129649,
        country: 'Dominicana',
        countryIdTezTour: 111241,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city11.save();
    const city12 = new City({
        city: 'La Romana',
        cityIdTezTour: 114523,
        country: 'Dominicana',
        countryIdTezTour: 111241,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city12.save();
    const city13 = new City({
        city: 'Punta Cana',
        cityIdTezTour: 111242,
        country: 'Dominicana',
        countryIdTezTour: 111241,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city13.save();
    const city15 = new City({
        city: 'Dahab',
        cityIdTezTour: 26313,
        country: 'Egypt',
        countryIdTezTour: 5732,
        natureTags: [natureTags.water, natureTags.mountains, natureTags.desert],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city15.save();
    const city16 = new City({
        city: 'Hurghada',
        cityIdTezTour: 5734,
        country: 'Egypt',
        countryIdTezTour: 5732,
        natureTags: [natureTags.water, natureTags.desert],
        restTypeTags: [restTypeTags.resort],
    })
    city16.save();
    const city19 = new City({
        city: 'Sharm El-Sheikh',
        cityIdTezTour: 5735,
        country: 'Egypt',
        countryIdTezTour: 5732,
        natureTags: [natureTags.water, natureTags.desert],
        restTypeTags: [restTypeTags.resort],
    })
    city19.save();
    const city20 = new City({
        city: 'Nice',
        cityIdTezTour: 9014130,
        country: 'France',
        countryIdTezTour: 136683,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife],
    })
    city20.save();
    const city21 = new City({
        city: 'Paris',
        cityIdTezTour: 9014799,
        country: 'France',
        countryIdTezTour: 136683,
        natureTags: [],
        restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife],
    })
    city21.save();
    const city22 = new City({
        city: 'Batumi',
        cityIdTezTour: 529438,
        country: 'Georgia',
        countryIdTezTour: 1001354,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife, restTypeTags.resort],
    })
    city22.save();
    const city23 = new City({
        city: 'Kobuleti',
        cityIdTezTour: 529434,
        country: 'Georgia',
        countryIdTezTour: 1001354,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city23.save();
    const city24 = new City({
        city: 'Kvariati',
        cityIdTezTour: 529428,
        country: 'Georgia',
        countryIdTezTour: 1001354,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city24.save();
    const city25 = new City({
        city: 'Gudauri',
        cityIdTezTour: 541083,
        country: 'Georgia',
        countryIdTezTour: 1001354,
        natureTags: [natureTags.mountains],
        restTypeTags: [restTypeTags.extreme],
    })
    city25.save();
    const city28 = new City({
        city: 'Tbilisi',
        cityIdTezTour: 529575,
        country: 'Georgia',
        countryIdTezTour: 1001354,
        natureTags: [natureTags.mountains],
        restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
    })
    city28.save();
    const city29 = new City({
        city: 'Balatonalmadi',
        cityIdTezTour: 608864,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.romantic],
    })
    city29.save();
    const city30 = new City({
        city: 'Balatonfured',
        cityIdTezTour: 610265,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.romantic],
    })
    city30.save();
    const city31 = new City({
        city: 'Budapest',
        cityIdTezTour: 128574,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [],
        restTypeTags: [restTypeTags.romantic],
    })
    city31.save();
    const city32 = new City({
        city: 'Bukfurdo',
        cityIdTezTour: 521377,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [],
        restTypeTags: [],
    })
    city32.save();
    const city33 = new City({
        city: 'Heviz',
        cityIdTezTour: 404722,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [],
        restTypeTags: [],
    })
    city33.save();
    const city34 = new City({
        city: 'Sarvar',
        cityIdTezTour: 521375,
        country: 'Hungary',
        countryIdTezTour: 128573,
        natureTags: [],
        restTypeTags: [],
    })
    city34.save();
    const city35 = new City({
        city: 'Athens',
        cityIdTezTour: 520415,
        country: 'Greece',
        countryIdTezTour: 7067498,
        natureTags: [],
        restTypeTags: [restTypeTags.historic, restTypeTags.romantic, restTypeTags.exotic],
    })
    city35.save();
    const city36 = new City({
        city: 'Corfu',
        cityIdTezTour: 9004032,
        country: 'Greece',
        countryIdTezTour: 7067498,
        natureTags: [natureTags.mountains, natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic, restTypeTags.historic],
    })
    city36.save();
    const city37 = new City({
        city: 'Santorini',
        cityIdTezTour: 284356,
        country: 'Greece',
        countryIdTezTour: 7067498,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city37.save();
    const city38 = new City({
        city: 'Bali Kuta',
        cityIdTezTour: 525603,
        country: 'Indonesia',
        countryIdTezTour: 158062,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city38.save();
    const city39 = new City({
        city: 'Bali Seminyak',
        cityIdTezTour: 525611,
        country: 'Indonesia',
        countryIdTezTour: 158062,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city39.save();
    const city40 = new City({
        city: 'Tanjung Benoa',
        cityIdTezTour: 525613,
        country: 'Indonesia',
        countryIdTezTour: 158062,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city40.save();
    const city41 = new City({
        city: 'Venice',
        cityIdTezTour: 9013463,
        country: 'Italy',
        countryIdTezTour: 154020,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.historic, restTypeTags.exotic, restTypeTags.romantic],
    })
    city41.save();
    const city43 = new City({
        city: 'Palermo',
        cityIdTezTour: 9013224,
        country: 'Italy',
        countryIdTezTour: 154020,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
    })
    city43.save();
    const city44 = new City({
        city: 'Catania',
        cityIdTezTour: 9013226,
        country: 'Italy',
        countryIdTezTour: 154020,
        natureTags: [],
        restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
    })
    city44.save();
    const city45 = new City({
        city: 'Rome',
        cityIdTezTour: 345295,
        country: 'Italy',
        countryIdTezTour: 154020,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.historic, restTypeTags.romantic, restTypeTags.nightLife],
    })
    city45.save();
    const city46 = new City({
        city: 'Male',
        cityIdTezTour: 9009296,
        country: 'Maldives',
        countryIdTezTour: 166775,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city46.save();
    const city48 = new City({
        city: 'Akumal',
        cityIdTezTour: 375705,
        country: 'Mexico',
        countryIdTezTour: 162875,
        natureTags: [natureTags.water, natureTags.forest],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city48.save();
    const city49 = new City({
        city: 'Cancun',
        cityIdTezTour: 274587,
        country: 'Mexico',
        countryIdTezTour: 162875,
        natureTags: [natureTags.water, natureTags.forest],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic, restTypeTags.nightLife],
    })
    city49.save();
    const city50 = new City({
        city: 'Playa del Carmen',
        cityIdTezTour: 274588,
        country: 'Mexico',
        countryIdTezTour: 162875,
        natureTags: [natureTags.water, natureTags.forest],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city50.save();
    const city51 = new City({
        city: 'Puerto Aventuras',
        cityIdTezTour: 375713,
        country: 'Mexico',
        countryIdTezTour: 162875,
        natureTags: [natureTags.water, natureTags.forest],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city51.save();
    const city53 = new City({
        city: 'Tulum',
        cityIdTezTour: 274591,
        country: 'Mexico',
        countryIdTezTour: 162875,
        natureTags: [natureTags.water, natureTags.forest],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic, restTypeTags.historic],
    })
    city53.save();
    const city54 = new City({
        city: 'Lisbon',
        cityIdTezTour: 4156323,
        country: 'Portugal',
        countryIdTezTour: 132579,
        natureTags: [natureTags.mountains],
        restTypeTags: [restTypeTags.romantic, restTypeTags.exotic],
    })
    city54.save();
    const city55 = new City({
        city: 'Madeira',
        cityIdTezTour: 531038,
        country: 'Portugal',
        countryIdTezTour: 132579,
        natureTags: [natureTags.water, natureTags.mountains],
        restTypeTags: [restTypeTags.romantic, restTypeTags.exotic, restTypeTags.extreme],
    })
    city55.save();
    const city56 = new City({
        city: 'Desroches Island',
        cityIdTezTour: 595233,
        country: 'Seychelles',
        countryIdTezTour: 6030845,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city56.save();
    const city57 = new City({
        city: 'La Digue',
        cityIdTezTour: 521716,
        country: 'Seychelles',
        countryIdTezTour: 6030845,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city57.save();
    const city58 = new City({
        city: 'Mahe',
        cityIdTezTour: 521711,
        country: 'Seychelles',
        countryIdTezTour: 6030845,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city58.save();
    const city59 = new City({
        city: 'Praslin',
        cityIdTezTour: 521713,
        country: 'Seychelles',
        countryIdTezTour: 6030845,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city59.save();
    const city60 = new City({
        city: 'Singapore',
        cityIdTezTour: 55360,
        country: 'Singapore',
        countryIdTezTour: 55359,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.nightLife, restTypeTags.exotic],
    })
    city60.save();
    const city61 = new City({
        city: 'Barcelona',
        cityIdTezTour: 64746,
        country: 'Spain',
        countryIdTezTour: 5733,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.nightLife, restTypeTags.romantic, restTypeTags.historic],
    })
    city61.save();
    const city62 = new City({
        city: 'Menorca',
        cityIdTezTour: 284813,
        country: 'Spain',
        countryIdTezTour: 5733,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city62.save();
    const city63 = new City({
        city: 'Tenerife',
        cityIdTezTour: 559866,
        country: 'Spain',
        countryIdTezTour: 5733,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
    })
    city63.save();
    const city64 = new City({
        city: 'Valencia',
        cityIdTezTour: 163368,
        country: 'Spain',
        countryIdTezTour: 5733,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
    })
    city64.save();
    const city65 = new City({
        city: 'Wadduwa',
        cityIdTezTour: 9003485,
        country: 'Sri Lanka',
        countryIdTezTour: 138865,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city65.save();
    const city66 = new City({
        city: 'Negombo',
        cityIdTezTour: 9003481,
        country: 'Sri Lanka',
        countryIdTezTour: 138865,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city66.save();
    const city67 = new City({
        city: 'Samui',
        cityIdTezTour: 14372,
        country: 'Thailand',
        countryIdTezTour: 12695,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city67.save();
    const city68 = new City({
        city: 'Phuket',
        cityIdTezTour: 14369,
        country: 'Thailand',
        countryIdTezTour: 12695,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city68.save();
    const city69 = new City({
        city: 'Pattaya',
        cityIdTezTour: 14259,
        country: 'Thailand',
        countryIdTezTour: 12695,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
    })
    city69.save();
    const city70 = new City({
        city: 'Bangkok',
        cityIdTezTour: 14358,
        country: 'Thailand',
        countryIdTezTour: 12695,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort, restTypeTags.exotic, restTypeTags.nightLife],
    })
    city70.save();
    const city71 = new City({
        city: 'Antalya',
        cityIdTezTour: 1285,
        country: 'Turkey',
        countryIdTezTour: 1104,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city71.save();
    const city72 = new City({
        city: 'Belek',
        cityIdTezTour: 12689,
        country: 'Turkey',
        countryIdTezTour: 1104,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.resort],
    })
    city72.save();
    const city73 = new City({
        city: 'Istanbul',
        cityIdTezTour: 21301,
        country: 'Turkey',
        countryIdTezTour: 1104,
        natureTags: [natureTags.water],
        restTypeTags: [restTypeTags.nightLife, restTypeTags.historic],
    })
    city73.save();
    const city74 = new City({
        city: 'Marmaris',
        cityIdTezTour: 4434,
        country: 'Turkey',
        countryIdTezTour: 1104,
        natureTags: [natureTags.water, natureTags.forest, natureTags.mountains],
        restTypeTags: [restTypeTags.resort],
    })
    city74.save();
}

export default fillDBWithCities;
