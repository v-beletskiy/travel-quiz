import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './style.scss';
import { appAction } from '../../../actions';
import ProgressBar from '../../../components/shared/ProgressBar/ProgressBar';
import Spinner from '../../../components/shared/Spinner/Spinner';
import { questionComponents } from '../../../data/Questions/questions';
import { natureType, restType } from '../../../reducers/types/app';

interface IProps {
    isLoading: boolean,
    question: number,
    setQuestionNumber: Function,
    updateAnswers: Function,
    temperature: number,
    nature: natureType,
    restTypes: restType,
    persons: string,
    budget: number,
    resetSearchData: Function,
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.app.isLoading,
        question: state.app.question,
        temperature: state.app.answers.temperature,
        nature: state.app.answers.nature,
        restTypes: state.app.answers.restTypes,
        persons: state.app.answers.persons,
        budget: state.app.answers.budget,
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
        resetSearchData: () => {
            dispatch(appAction.resetSearchData());
        }
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
    } else {
        updateAnswers(questionType, answerData);
    }
}

const Stepper = (props: IProps) => {
    const { isLoading, question, setQuestionNumber, updateAnswers, temperature, nature, restTypes, persons, budget, resetSearchData } = props;
    const [isSpinnerAnimationActive, setSpinnerAnimationStatus] = useState(false);
    const [isQuestionAnimationActive, setQuestionAnimationStatus] = useState(true);
    const [lastQuestionDimensions, setLastQuestionDimensions] = useState({
        lastQuestionWidth: 0,
        lastQuestionHeight: 0,
    });

    const questionContainer = useRef(null);
    useLayoutEffect(() => {
        setLastQuestionDimensions({
            lastQuestionWidth: questionContainer.current.clientWidth,
            lastQuestionHeight: questionContainer.current.clientHeight,
        })
    }, [question === questionComponents.length]);

    useLayoutEffect(() => {
        if (question !== questionComponents.length) {
            window.scrollTo(0, 0);
        }
    }, [question]);

    useEffect(() => {
        resetSearchData();
    }, [temperature, nature, persons, restTypes, budget]);

    return (
        <>
            <CSSTransition
                in={isLoading && !isQuestionAnimationActive}
                timeout={1500}
                unmountOnExit
                classNames="spinner-container"
                onEnter={() => setSpinnerAnimationStatus(true)}
                onExited={() => {
                    setSpinnerAnimationStatus(false);
                    setQuestionAnimationStatus(true);
                }}
            >
                <div
                    className="spinner-container"
                    style={{
                        ['--spinnerContainerSmallerDimension' as any]:
                            `${lastQuestionDimensions.lastQuestionWidth < lastQuestionDimensions.lastQuestionHeight ?
                                lastQuestionDimensions.lastQuestionWidth : lastQuestionDimensions.lastQuestionHeight}px`,
                        ['--spinnerContainerHeight' as any]: `${lastQuestionDimensions.lastQuestionHeight}px`,
                    }}>
                    <Spinner />
                </div>
            </CSSTransition>
            <CSSTransition
                in={!isLoading && !isSpinnerAnimationActive}
                timeout={300}
                unmountOnExit
                classNames="question-container"
                onExited={() => setQuestionAnimationStatus(false)}
            >
                <div className='question-container' ref={questionContainer}>
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
            </CSSTransition>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
