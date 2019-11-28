import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RadioButton from '../../../../components/shared/RadioButton/RadioButton';
import Button from '../../../../components/shared/Button/Button';
import { personsData } from '../../../../data/Questions/persons';
import '../style.scss';

const mapStateToProps = (state: any) => {
    return {
        persons: state.app.answers.persons,
    }
}

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    questionsQuantity?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    persons: string,
}

const Persons = (props: IProps) => {
    const { persons, setQuestionNumber, updateAnswers, question, questionsQuantity, goPrevButtonHandler, goNextButtonHandler } = props;
    const [state, setPersons] = useState(persons);
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <>
            <div className="persons-question-container">
                {
                    personsData.map(item => {
                        return (
                            <div key={item.value} className="persons-question-container__item">
                                <RadioButton value={item.value} isChecked={state === item.value} name="persons" onChange={() => setPersons(item.value)} />
                                <p className="persons-question-container__item__text">{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="question-button-container">
                <Button className="first" onClick={() => goPrevButtonHandler(setQuestionNumber, updateAnswers, state, 'persons', question)}>
                    Prev
                </Button>
                <Button className="second" isDisabled={!state.length}
                    onClick={() => goNextButtonHandler(setQuestionNumber, updateAnswers, state, 'persons', question, questionsQuantity)}
                >
                    Next
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, null)(Persons);
