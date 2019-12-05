import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { natureData } from '../../../../data/Questions/nature';
import Button from '../../../../components/shared/Button/Button';
import Checkbox from '../../../../components/shared/Checkbox/Checkbox';
import { natureType } from '../../../../reducers/types/app';
import '../style.scss';

const mapStateToProps = (state: any) => {
    return {
        nature: state.app.answers.nature,
    }
}

interface IProps {
    nature: natureType,
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
}

interface IInitialState {
    forest?: boolean,
    mountains?: boolean,
    water?: boolean,
    desert?: boolean,
}

const getInitialState = (nature: IInitialState) => {
    let initialState: IInitialState = {};
    let natureTypes = natureData.map(item => item.type);
    natureTypes.forEach(type => {
        initialState[type] = nature[type];
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

const Nature = (props: IProps) => {
    const { nature, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [state, dispatch] = useReducer(reducer, getInitialState(nature));

    return (
        <>
            <div className="nature-question-container">
                {
                    natureData.map((item, i) => {
                        return (
                            <div key={item.type} className="nature-question-container__item">
                                <img src={natureData[i].img} />
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
                <Button className="first" onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, state, 'nature', question )}
                >
                    Prev
                </Button>
                <Button className="second" isDisabled={checkNavigationButtonStatus(state)}
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, state, 'nature', question, questionsQuantity )}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(Nature);
