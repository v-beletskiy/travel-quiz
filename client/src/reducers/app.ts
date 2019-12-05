import { ActionType } from '../actions/app/actionTypes';
import IApp from './types/app';

const appInitialState: IApp = {
    isLoading: false,
    question: 1,
    answers: {
        temperature: 25,
        nature: {
            forest: false,
            mountains: false,
            water: false,
            desert: false,
        },
        persons: '',
        restTypes: {
            romantic: false,
            nightLife: false,
            extreme: false,
            historic: false,
            exotic: false,
            resort: false,
        },
        budget: 0,
        departureTime: '',
    },
    citiesToChooseFrom: [],
};

export default (state = appInitialState, action: any) => {
    switch (action.type) {
        case ActionType.UPDATE_LOADING_STATUS: {
            const { status } = action;
            return { ...state, isLoading: status };
        }
        case ActionType.SET_QUESTION_NUMBER: {
            const { number } = action;
            return { ...state, question: number };
        }
        case ActionType.UPDATE_ANSWERS: {
            const { data, questionType } = action.payload;
            switch (questionType) {
                case 'temperature': {
                    return { ...state, answers: { ...state.answers, temperature: data } };
                }
                case 'nature': {
                    return { ...state, answers: { ...state.answers, nature: { ...state.answers.nature, ...data } } };
                }
                case 'persons': {
                    return { ...state, answers: { ...state.answers, persons: data } };
                }
                case 'departure': {
                    return { ...state, answers: { ...state.answers, departureTime: data } };
                }
                case 'restTypes': {
                    return { ...state, answers: { ...state.answers, restTypes: { ...state.answers.restTypes, ...data } } };
                }
                case 'budget': {
                    return { ...state, answers: { ...state.answers, budget: data } };
                }
                default: {
                    console.error('There\'s no such a question to update data.');
                }
            }
        }
        case ActionType.UPDATE_CITIES_TO_CHOOSE_FROM: {
            const cities = action.payload;
            return { ...state, citiesToChooseFrom: cities };
        }
        default: {
            return state;
        }
    }
};
