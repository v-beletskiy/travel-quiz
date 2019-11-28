import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { appAction } from '../../../actions';
import ProgressBar from '../../../components/shared/ProgressBar/ProgressBar';
import { questionComponents } from '../../../data/Questions/questions';

interface IProps {
    question: number,
    setQuestionNumber: Function,
    updateAnswers: Function,
}

const mapStateToProps = (state: any) => {
    return {
        question: state.app.question,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setQuestionNumber: (number: Number) => {
            dispatch(appAction.setQuestionNumber(number));
        },
        updateAnswers: (questionType: string, answerData: any) => {
            dispatch(appAction.updateAnswers(questionType, answerData));
        },
    }
}

const calculateProgress = (currentQuestion: number, allQuestions: number) => {
    const progress = (currentQuestion) / allQuestions * 100;
    return progress;
}

const goPrevButtonHandler = (setQuestionNumber: Function, updateAnswers: Function, answerData: any, questionType: string, questionNumber: number) => {
    if (questionNumber > 1) {
        setQuestionNumber(questionNumber - 1);
        updateAnswers(questionType, answerData);
    }
}

const goNextButtonHandler = (setQuestionNumber: Function, updateAnswers: Function, answerData: any, questionType: string, questionNumber: number,
    questionsQuantity: number) => {
    if (questionNumber < questionsQuantity) {
        setQuestionNumber(questionNumber + 1);
        updateAnswers(questionType, answerData);
    }
}

const Stepper = (props: IProps) => {
    const { question, setQuestionNumber, updateAnswers } = props;
    
    return (
        <div className="question-container">
            <p className="question-container__subheader">{questionComponents[question - 1].subheader}</p>
            <ProgressBar value={calculateProgress(question, questionComponents.length)} />
            {
                React.cloneElement(questionComponents[question - 1].component,
                    {
                        questionsQuantity: questionComponents.length,
                        goPrevButtonHandler: goPrevButtonHandler,
                        goNextButtonHandler: goNextButtonHandler,
                        setQuestionNumber: setQuestionNumber,
                        updateAnswers: updateAnswers,
                        question: question,
                    }
                )
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
