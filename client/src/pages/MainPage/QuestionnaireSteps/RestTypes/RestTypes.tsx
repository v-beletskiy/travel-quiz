import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { restTypesData } from '../../../../data/Questions/restTypes';
import Button from '../../../../components/shared/Button/Button';
import Checkbox from '../../../../components/shared/Checkbox/Checkbox';

const mapStateToProps = (state: any) => {
    return {
        restTypes: state.app.answers.restTypes,
    }
}

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    restTypes: IInitialState,
}

interface IInitialState {
    romantic?: boolean,
    nightLife?: boolean,
    extreme?: boolean,
    historic?: boolean,
    exotic?: boolean,
    resort?: boolean,
}

const getInitialState = (rest: IInitialState) => {
    let initialState: IInitialState = {};
    let restTypes = restTypesData.map(item => item.type);
    restTypes.forEach(type => {
        initialState[type] = rest[type];
    });
    return initialState;
}

const reducer = (state: IInitialState, action: any) => {
    const { checkboxName, status } = action.data;
    switch (action.type) {
        case 'setCheckboxValue':
            return { ...state, [checkboxName]: status };
        default:
            console.error('There\'s no such an action type');
    }
}

const handleCheckboxChange = (e: any, dispatch: any) => {
    const status = e.target.checked;
    const checkboxName = e.target.name;
    dispatch({ type: 'setCheckboxValue', data: { checkboxName: checkboxName, status: status } });
}

const checkNavigationButtonStatus = (state: IInitialState) => {
    return Object.values(state).some(el => el === true) ? false : true;
}

const RestTypes = (props: IProps) => {
    const { restTypes, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [state, dispatch] = useReducer(reducer, getInitialState(restTypes));
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <div className="rest-preference-question-container">
                {
                    restTypesData.map((item, i) => {
                        return (
                            <div key={item.type} className="rest-preference-question-container__item">
                                <img src={restTypesData[i].img} />
                                <div className="checkbox-container">
                                    <Checkbox
                                        onChange={(e: any) => handleCheckboxChange(e, dispatch)}
                                        isChecked={state[item.type]}
                                        name={item.type}
                                    />
                                    <p className="checkbox-container__text">{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="question-button-container">
                <Button className="first" onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, state, 'restTypes', question )}
                >
                    Prev
                </Button>
                <Button className="second" isDisabled={checkNavigationButtonStatus(state)}
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, state, 'restTypes', question, questionsQuantity )}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(RestTypes);
