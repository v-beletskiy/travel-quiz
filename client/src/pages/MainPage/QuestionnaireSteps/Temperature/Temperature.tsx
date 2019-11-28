import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import Button from '../../../../components/shared/Button/Button';

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    temperature?: number,
}

const mapStateToProps = (state: any) => {
    return {
        temperature: state.app.answers.temperature,
    }
}

const handleTemperatureChange = (e: any, changeTemperature: Function) => {
    const temperature = Number(e.target.value);
    changeTemperature(temperature);
}

const Temperature = (props: IProps) => {
    const { temperature, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [temperatureState, changeTemperature] = useState(temperature);
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <div className="temperature-question-container">
                <input name="temperature" value={temperatureState} onChange={(e: any) => handleTemperatureChange(e, changeTemperature)}></input>
            </div>
            <div className="question-button-container">
                <Button
                    className="first"
                    onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, temperatureState, 'temperature', question)}
                    isDisabled={question === 1}
                >
                    Prev
                </Button>
                <Button className="second"
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, temperatureState, 'temperature', question, questionsQuantity)}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(Temperature);
