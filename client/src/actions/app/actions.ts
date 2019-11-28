import { ActionType } from './actionTypes';

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
                questionType: questionType
            }
        });
    }
}
