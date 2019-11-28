import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RadioButton from '../../../../components/shared/RadioButton/RadioButton';
import Button from '../../../../components/shared/Button/Button';
import { departureData } from '../../../../data/Questions/departure';
import '../style.scss';

const mapStateToProps = (state: any) => {
    return {
        departureTime: state.app.answers.departureTime,
    }
}

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    departureTime: string,
}

const DepartureTime = (props: IProps) => {
    const { departureTime, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [state, setDepartureTime] = useState(departureTime);
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <div className="departure-time-question-container">
                {
                    departureData.map(item => {
                        return (
                            <div key={item.value} className="departure-time-question-container__item">
                                <RadioButton value={item.value} isChecked={state === item.value} name="departureTime" onChange={() => setDepartureTime(item.value)} />
                                <p className="departure-time-question-container__item__text">{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="question-button-container">
                <Button className="first" onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, state, 'departure', question)}>
                    Prev
                </Button>
                <Button className="second" isDisabled={!state.length}
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, state, 'departure', question, questionsQuantity)}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(DepartureTime);
