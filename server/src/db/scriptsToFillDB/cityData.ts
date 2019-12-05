export { };
const City = require('../models/city');
import { natureTags, restTypeTags } from './tagsForCityData';

const fillDBWithCities = async () => {
    try {
        const city1 = new City({
            city: 'Abu Dhabi',
            cityIdTezTour: 7067153,
            country: 'UAE',
            countryIdTezTour: 7067149,
            natureTags: [natureTags.desert, natureTags.water],
            restTypeTags: [restTypeTags.exotic],
            imgPreviewName: 'abu_dhabi.jpg',
        })
        await city1.save();
        const city2 = new City({
            city: 'Dubai',
            cityIdTezTour: 7067156,
            country: 'UAE',
            countryIdTezTour: 7067149,
            natureTags: [natureTags.desert, natureTags.water],
            restTypeTags: [restTypeTags.exotic],
            imgPreviewName: 'dubai.jpg',
        })
        await city2.save();
        const city3 = new City({
            city: 'Fujairah',
            cityIdTezTour: 7067155,
            country: 'UAE',
            countryIdTezTour: 7067149,
            natureTags: [natureTags.desert, natureTags.water],
            restTypeTags: [restTypeTags.exotic],
            imgPreviewName: 'fujairah.jpg',
        })
        await city3.save();
        const city4 = new City({
            city: 'Vienna',
            cityIdTezTour: 147579,
            country: 'Austria',
            countryIdTezTour: 147573,
            natureTags: [natureTags.forest],
            restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
            imgPreviewName: 'vienna.jpg',
        })
        await city4.save();
        const city5 = new City({
            city: 'Agia Napa',
            cityIdTezTour: 7067683,
            country: 'Cyprus',
            countryIdTezTour: 7067673,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'agia_napa.jpg',
        })
        await city5.save();
        const city6 = new City({
            city: 'Larnaca',
            cityIdTezTour: 7067674,
            country: 'Cyprus',
            countryIdTezTour: 7067673,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'larnaca.jpg',
        })
        await city6.save();
        const city7 = new City({
            city: 'Limassol',
            cityIdTezTour: 7067681,
            country: 'Cyprus',
            countryIdTezTour: 7067673,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'limassol.jpg',
        })
        await city7.save();
        const city8 = new City({
            city: 'Nicosia',
            cityIdTezTour: 287332,
            country: 'Cyprus',
            countryIdTezTour: 7067673,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'nicosia.jpg',
        })
        await city8.save();
        const city9 = new City({
            city: 'Karlovy Vary',
            cityIdTezTour: 529485,
            country: 'Czech Republic',
            countryIdTezTour: 160930,
            natureTags: [natureTags.forest],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'karlovy_vary.jpg',
        })
        await city9.save();
        const city10 = new City({
            city: 'Prague',
            cityIdTezTour: 537102,
            country: 'Czech Republic',
            countryIdTezTour: 160930,
            natureTags: [],
            restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
            imgPreviewName: 'prague.jpg',
        })
        await city10.save();
        const city11 = new City({
            city: 'Boca Chica',
            cityIdTezTour: 129649,
            country: 'Dominicana',
            countryIdTezTour: 111241,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'boca_chica.jpg',
        })
        await city11.save();
        const city12 = new City({
            city: 'La Romana',
            cityIdTezTour: 114523,
            country: 'Dominicana',
            countryIdTezTour: 111241,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'la_romana.jpg',
        })
        await city12.save();
        const city13 = new City({
            city: 'Punta Cana',
            cityIdTezTour: 111242,
            country: 'Dominicana',
            countryIdTezTour: 111241,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'punta_cana.jpg',
        })
        await city13.save();
        const city15 = new City({
            city: 'Dahab',
            cityIdTezTour: 26313,
            country: 'Egypt',
            countryIdTezTour: 5732,
            natureTags: [natureTags.water, natureTags.mountains, natureTags.desert],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'dahab.jpg',
        })
        await city15.save();
        const city16 = new City({
            city: 'Hurghada',
            cityIdTezTour: 5734,
            country: 'Egypt',
            countryIdTezTour: 5732,
            natureTags: [natureTags.water, natureTags.desert],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'hurghada.jpg',
        })
        await city16.save();
        const city19 = new City({
            city: 'Sharm El-Sheikh',
            cityIdTezTour: 5735,
            country: 'Egypt',
            countryIdTezTour: 5732,
            natureTags: [natureTags.water, natureTags.desert],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'sharm_el_sheikh.jpg',
        })
        await city19.save();
        const city20 = new City({
            city: 'Nice',
            cityIdTezTour: 9014130,
            country: 'France',
            countryIdTezTour: 136683,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife],
            imgPreviewName: 'nice.jpg',
        })
        await city20.save();
        const city21 = new City({
            city: 'Paris',
            cityIdTezTour: 9014799,
            country: 'France',
            countryIdTezTour: 136683,
            natureTags: [],
            restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife],
            imgPreviewName: 'paris.jpg',
        })
        await city21.save();
        const city22 = new City({
            city: 'Batumi',
            cityIdTezTour: 529438,
            country: 'Georgia',
            countryIdTezTour: 1001354,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.romantic, restTypeTags.nightLife, restTypeTags.resort],
            imgPreviewName: 'batumi.jpg',
        })
        await city22.save();
        const city23 = new City({
            city: 'Kobuleti',
            cityIdTezTour: 529434,
            country: 'Georgia',
            countryIdTezTour: 1001354,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'kobuleti.jpg',
        })
        await city23.save();
        const city24 = new City({
            city: 'Kvariati',
            cityIdTezTour: 529428,
            country: 'Georgia',
            countryIdTezTour: 1001354,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'kvariati.jpg',
        })
        await city24.save();
        const city25 = new City({
            city: 'Gudauri',
            cityIdTezTour: 541083,
            country: 'Georgia',
            countryIdTezTour: 1001354,
            natureTags: [natureTags.mountains],
            restTypeTags: [restTypeTags.extreme],
            imgPreviewName: 'gudauri.jpg',
        })
        await city25.save();
        const city28 = new City({
            city: 'Tbilisi',
            cityIdTezTour: 529575,
            country: 'Georgia',
            countryIdTezTour: 1001354,
            natureTags: [natureTags.mountains],
            restTypeTags: [restTypeTags.romantic, restTypeTags.historic],
            imgPreviewName: 'tbilisi.jpg',
        })
        await city28.save();
        const city29 = new City({
            city: 'Balatonalmadi',
            cityIdTezTour: 608864,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.romantic],
            imgPreviewName: 'balatonalmadi.jpg',
        })
        await city29.save();
        const city30 = new City({
            city: 'Balatonfured',
            cityIdTezTour: 610265,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.romantic],
            imgPreviewName: 'balatonfured.jpg',
        })
        await city30.save();
        const city31 = new City({
            city: 'Budapest',
            cityIdTezTour: 128574,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [],
            restTypeTags: [restTypeTags.romantic],
            imgPreviewName: 'budapest.jpg',
        })
        await city31.save();
        const city32 = new City({
            city: 'Bukfurdo',
            cityIdTezTour: 521377,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [],
            restTypeTags: [],
            imgPreviewName: 'bukfurdo.jpg',
        })
        await city32.save();
        const city33 = new City({
            city: 'Heviz',
            cityIdTezTour: 404722,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [],
            restTypeTags: [],
            imgPreviewName: 'heviz.jpg',
        })
        await city33.save();
        const city34 = new City({
            city: 'Sarvar',
            cityIdTezTour: 521375,
            country: 'Hungary',
            countryIdTezTour: 128573,
            natureTags: [],
            restTypeTags: [],
            imgPreviewName: 'sarvar.jpg',
        })
        await city34.save();
        const city35 = new City({
            city: 'Athens',
            cityIdTezTour: 520415,
            country: 'Greece',
            countryIdTezTour: 7067498,
            natureTags: [],
            restTypeTags: [restTypeTags.historic, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'athens.jpg',
        })
        await city35.save();
        const city36 = new City({
            city: 'Corfu',
            cityIdTezTour: 9004032,
            country: 'Greece',
            countryIdTezTour: 7067498,
            natureTags: [natureTags.mountains, natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic, restTypeTags.historic],
            imgPreviewName: 'corfu.jpg',
        })
        await city36.save();
        const city37 = new City({
            city: 'Santorini',
            cityIdTezTour: 284356,
            country: 'Greece',
            countryIdTezTour: 7067498,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'santorini.jpg',
        })
        await city37.save();
        const city38 = new City({
            city: 'Bali Kuta',
            cityIdTezTour: 525603,
            country: 'Indonesia',
            countryIdTezTour: 158062,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'bali_kuta.jpg',
        })
        await city38.save();
        const city39 = new City({
            city: 'Bali Seminyak',
            cityIdTezTour: 525611,
            country: 'Indonesia',
            countryIdTezTour: 158062,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'bali_seminyak.jpg',
        })
        await city39.save();
        const city40 = new City({
            city: 'Tanjung Benoa',
            cityIdTezTour: 525613,
            country: 'Indonesia',
            countryIdTezTour: 158062,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'tanjung_benoa.jpg',
        })
        await city40.save();
        const city41 = new City({
            city: 'Venice',
            cityIdTezTour: 9013463,
            country: 'Italy',
            countryIdTezTour: 154020,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.historic, restTypeTags.exotic, restTypeTags.romantic],
            imgPreviewName: 'venice.jpg',
        })
        await city41.save();
        const city43 = new City({
            city: 'Palermo',
            cityIdTezTour: 9013224,
            country: 'Italy',
            countryIdTezTour: 154020,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
            imgPreviewName: 'palermo.jpg',
        })
        await city43.save();
        const city44 = new City({
            city: 'Catania',
            cityIdTezTour: 9013226,
            country: 'Italy',
            countryIdTezTour: 154020,
            natureTags: [],
            restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
            imgPreviewName: 'catania.jpg',
        })
        await city44.save();
        const city45 = new City({
            city: 'Rome',
            cityIdTezTour: 345295,
            country: 'Italy',
            countryIdTezTour: 154020,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.historic, restTypeTags.romantic, restTypeTags.nightLife],
            imgPreviewName: 'rome.jpg',
        })
        await city45.save();
        const city46 = new City({
            city: 'Male',
            cityIdTezTour: 9009296,
            country: 'Maldives',
            countryIdTezTour: 166775,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'male.jpg',
        })
        await city46.save();
        const city48 = new City({
            city: 'Akumal',
            cityIdTezTour: 375705,
            country: 'Mexico',
            countryIdTezTour: 162875,
            natureTags: [natureTags.water, natureTags.forest],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'akumal.jpg',
        })
        await city48.save();
        const city49 = new City({
            city: 'Cancun',
            cityIdTezTour: 274587,
            country: 'Mexico',
            countryIdTezTour: 162875,
            natureTags: [natureTags.water, natureTags.forest],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic, restTypeTags.nightLife],
            imgPreviewName: 'cancun.jpg',
        })
        await city49.save();
        const city50 = new City({
            city: 'Playa del Carmen',
            cityIdTezTour: 274588,
            country: 'Mexico',
            countryIdTezTour: 162875,
            natureTags: [natureTags.water, natureTags.forest],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'playa_del_carmen.jpg',
        })
        await city50.save();
        const city51 = new City({
            city: 'Puerto Aventuras',
            cityIdTezTour: 375713,
            country: 'Mexico',
            countryIdTezTour: 162875,
            natureTags: [natureTags.water, natureTags.forest],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'puerto_aventuras.jpg',
        })
        await city51.save();
        const city53 = new City({
            city: 'Tulum',
            cityIdTezTour: 274591,
            country: 'Mexico',
            countryIdTezTour: 162875,
            natureTags: [natureTags.water, natureTags.forest],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic, restTypeTags.historic],
            imgPreviewName: 'tulum.jpg',
        })
        await city53.save();
        const city54 = new City({
            city: 'Lisbon',
            cityIdTezTour: 4156323,
            country: 'Portugal',
            countryIdTezTour: 132579,
            natureTags: [natureTags.mountains],
            restTypeTags: [restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'lisbon.jpg',
        })
        await city54.save();
        const city55 = new City({
            city: 'Madeira',
            cityIdTezTour: 531038,
            country: 'Portugal',
            countryIdTezTour: 132579,
            natureTags: [natureTags.water, natureTags.mountains],
            restTypeTags: [restTypeTags.romantic, restTypeTags.exotic, restTypeTags.extreme],
            imgPreviewName: 'madeira.jpg',
        })
        await city55.save();
        const city56 = new City({
            city: 'Desroches Island',
            cityIdTezTour: 595233,
            country: 'Seychelles',
            countryIdTezTour: 6030845,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'desroches_island.jpg',
        })
        await city56.save();
        const city57 = new City({
            city: 'La Digue',
            cityIdTezTour: 521716,
            country: 'Seychelles',
            countryIdTezTour: 6030845,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'la_digue.jpg',
        })
        await city57.save();
        const city58 = new City({
            city: 'Mahe',
            cityIdTezTour: 521711,
            country: 'Seychelles',
            countryIdTezTour: 6030845,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'mahe.jpg',
        })
        await city58.save();
        const city59 = new City({
            city: 'Praslin',
            cityIdTezTour: 521713,
            country: 'Seychelles',
            countryIdTezTour: 6030845,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'praslin.jpg',
        })
        await city59.save();
        const city60 = new City({
            city: 'Singapore',
            cityIdTezTour: 55360,
            country: 'Singapore',
            countryIdTezTour: 55359,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.nightLife, restTypeTags.exotic],
            imgPreviewName: 'singapore.jpg',
        })
        await city60.save();
        const city61 = new City({
            city: 'Barcelona',
            cityIdTezTour: 64746,
            country: 'Spain',
            countryIdTezTour: 5733,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.nightLife, restTypeTags.romantic, restTypeTags.historic],
            imgPreviewName: 'barcelona.jpg',
        })
        await city61.save();
        const city62 = new City({
            city: 'Menorca',
            cityIdTezTour: 284813,
            country: 'Spain',
            countryIdTezTour: 5733,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'menorca.jpg',
        })
        await city62.save();
        const city63 = new City({
            city: 'Tenerife',
            cityIdTezTour: 559866,
            country: 'Spain',
            countryIdTezTour: 5733,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.romantic, restTypeTags.exotic],
            imgPreviewName: 'tenerife.jpg',
        })
        await city63.save();
        const city64 = new City({
            city: 'Valencia',
            cityIdTezTour: 163368,
            country: 'Spain',
            countryIdTezTour: 5733,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.historic, restTypeTags.romantic],
            imgPreviewName: 'valencia.jpg',
        })
        await city64.save();
        const city65 = new City({
            city: 'Wadduwa',
            cityIdTezTour: 9003485,
            country: 'Sri Lanka',
            countryIdTezTour: 138865,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'wadduwa.jpg',
        })
        await city65.save();
        const city66 = new City({
            city: 'Negombo',
            cityIdTezTour: 9003481,
            country: 'Sri Lanka',
            countryIdTezTour: 138865,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'negombo.jpg',
        })
        await city66.save();
        const city67 = new City({
            city: 'Samui',
            cityIdTezTour: 14372,
            country: 'Thailand',
            countryIdTezTour: 12695,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'samui.jpg',
        })
        await city67.save();
        const city68 = new City({
            city: 'Phuket',
            cityIdTezTour: 14369,
            country: 'Thailand',
            countryIdTezTour: 12695,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'phuket.jpg',
        })
        await city68.save();
        const city69 = new City({
            city: 'Pattaya',
            cityIdTezTour: 14259,
            country: 'Thailand',
            countryIdTezTour: 12695,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic],
            imgPreviewName: 'pattaya.jpg',
        })
        await city69.save();
        const city70 = new City({
            city: 'Bangkok',
            cityIdTezTour: 14358,
            country: 'Thailand',
            countryIdTezTour: 12695,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort, restTypeTags.exotic, restTypeTags.nightLife],
            imgPreviewName: 'bangkok.jpg',
        })
        await city70.save();
        const city71 = new City({
            city: 'Antalya',
            cityIdTezTour: 1285,
            country: 'Turkey',
            countryIdTezTour: 1104,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'antalya.jpg',
        })
        await city71.save();
        const city72 = new City({
            city: 'Belek',
            cityIdTezTour: 12689,
            country: 'Turkey',
            countryIdTezTour: 1104,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'belek.jpg',
        })
        await city72.save();
        const city73 = new City({
            city: 'Istanbul',
            cityIdTezTour: 21301,
            country: 'Turkey',
            countryIdTezTour: 1104,
            natureTags: [natureTags.water],
            restTypeTags: [restTypeTags.nightLife, restTypeTags.historic],
            imgPreviewName: 'istanbul.jpg',
        })
        await city73.save();
        const city74 = new City({
            city: 'Marmaris',
            cityIdTezTour: 4434,
            country: 'Turkey',
            countryIdTezTour: 1104,
            natureTags: [natureTags.water, natureTags.forest, natureTags.mountains],
            restTypeTags: [restTypeTags.resort],
            imgPreviewName: 'marmaris.jpg',
        })
        await city74.save();
    } catch (e) {
        console.error('Something went wrong, while attempting to fill DB with cities\' data.', e);
    }
}

export default fillDBWithCities;
