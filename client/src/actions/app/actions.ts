import { ActionType } from './actionTypes';
import { natureType, restType } from '../../reducers/types/app';
import AppService from '../../services/AppService';

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

export const searchSuitableCities = (temperature: number, nature: natureType, restTypes: restType) => {
    return async (dispatch: any) => {
        const chosenNatureTypes = Object.entries(nature).filter(item => item[1] === true).map(item => item[0]);
        const chosenRestTypes = Object.entries(restTypes).filter(item => item[1] === true).map(item => item[0]);
        const cities = await AppService.getSuitableCitiesByParams(temperature, chosenNatureTypes, chosenRestTypes);
        dispatch({
            type: ActionType.UPDATE_CITIES_TO_CHOOSE_FROM,
            payload: cities,
        });
    }
}
