import React from 'react';
import Temperature from '../../pages/MainPage/QuestionnaireSteps/Temperature/Temperature';
import Nature from '../../pages/MainPage/QuestionnaireSteps/Nature/Nature';
import Persons from '../../pages/MainPage/QuestionnaireSteps/Persons/Persons';
import DepartureTime from '../../pages/MainPage/QuestionnaireSteps/DepartureTime/DepartureTime';
import Budget from '../../pages/MainPage/QuestionnaireSteps/Budget/Budget';
import RestTypes from '../../pages/MainPage/QuestionnaireSteps/RestTypes/RestTypes';

type questions = {
    component: any,
    subheader: string,
}[];

export const questionComponents: questions = [
    {
        component: <Temperature />,
        subheader: 'Choose preferrable temperature',
    },
    {
        component: <Nature />,
        subheader: 'Choose preferrable nature',
    },
    {
        component: <Persons />,
        subheader: 'Choose how much persons you want to travel with',
    },
    {
        component: <RestTypes />,
        subheader: 'What rest type do you prefer?',
    },
    {
        component: <Budget />,
        subheader: 'What price do you keep in mind?',
    },
    {
        component: <DepartureTime />,
        subheader: 'When would you like to go?',
    },
]
