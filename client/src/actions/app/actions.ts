import { ActionType } from './actionTypes';
import { natureType, restType } from '../../reducers/types/app';
import AppService from '../../services/AppService';
import { personsTypes } from '../../data/Questions/persons';
import { store } from '../../store/store';

export const setQuestionNumber = (number: Number) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.SET_QUESTION_NUMBER,
            number,
        });
    }
}

export const updateAnswers = (questionType: string, answerData: any) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.UPDATE_ANSWERS,
            payload: {
                data: answerData,
                questionType: questionType,
            }
        });
    }
}

export const setLoadingStatus = (status: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.UPDATE_LOADING_STATUS,
            status,
        });
    }
}

export const setToursLoadingStatus = (status: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.UPDATE_TOURS_LOADING_STATUS,
            status,
        });
    }
}

export const searchSuitableCities = (temperature: number, nature: natureType, restTypes: restType) => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.RESET_CITY_DATA,
        })
        const chosenNatureTypes = Object.entries(nature).filter(item => item[1] === true).map(item => item[0]);
        const chosenRestTypes = Object.entries(restTypes).filter(item => item[1] === true).map(item => item[0]);
        const cities = await AppService.getSuitableCitiesByParams(temperature, chosenNatureTypes, chosenRestTypes);
        if (cities) {
            dispatch({
                type: ActionType.UPDATE_CITIES_TO_CHOOSE_FROM,
                payload: cities,
            });
        }
    }
}

export const setChosenCity = (cityName: string) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.SET_CHOSEN_CITY,
            cityName,
        });
    }
}

export const loadCityImages = (cityName: string) => {
    return async (dispatch: any) => {
        const cityImages: string[] = await AppService.getCityImages(cityName);
        const absoluteURIsCityImages: string[] = cityImages.map(uri => `${process.env.SERVER_ORIGIN}${uri}`);
        if (cityImages) {
            dispatch({
                type: ActionType.GET_CITY_IMAGES,
                payload: absoluteURIsCityImages,
            });
        }
    }
}

export const loadTours = (cityName: string, budget: number, departure: string, persons: string) => {
    let personsNumber: number;
    switch(persons) {
        case personsTypes.single: {
            personsNumber = 1;
            break;
        }
        case personsTypes.beloved: {
            personsNumber = 2;
            break;
        }
        case personsTypes.family: {
            personsNumber = 3;
            break;
        }
        default: {
            personsNumber = 2;
        }
    }
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.UPDATE_TOURS_LOADING_STATUS,
            status: true,
        });
        const toursPromise = AppService.getSuitableTours({ cityName: cityName, budget: budget, departure: departure, persons: personsNumber });
        const loaderPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
        Promise.all([toursPromise, loaderPromise])
            .then((responses) => {
                if (responses[0]) {
                    dispatch({
                        type: ActionType.GET_TOURS,
                        payload: responses[0],
                    })
                }
                dispatch({
                    type: ActionType.UPDATE_TOURS_LOADING_STATUS,
                    status: false,
                });
            })
    }
}

export const resetSearchData = () => {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.RESET_CITY_DATA,
        })
        dispatch({
            type: ActionType.RESET_TOURS,
        })
    }
}

export const resetAppState = () => {
    store.dispatch({ type: ActionType.CLEAR_APP_INFO });
}
