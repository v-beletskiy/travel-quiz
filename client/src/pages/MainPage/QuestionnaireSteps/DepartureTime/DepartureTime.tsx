import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RadioButton from '../../../../components/shared/RadioButton/RadioButton';
import Button from '../../../../components/shared/Button/Button';
import { departureData } from '../../../../data/Questions/departure';
import { appAction } from '../../../../actions';
import '../style.scss';

const mapStateToProps = (state: any) => {
    return {
        departureTime: state.app.answers.departureTime,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setLoadingStatus: (status: boolean) => {
            dispatch(appAction.setLoadingStatus(status));
        }
    }
}

interface IProps {
    setQuestionNumber?: Function,
    updateAnswers?: Function,
    question?: number,
    goPrevButtonHandler?: Function,
    goNextButtonHandler?: Function,
    departureTime: string,
    setLoadingStatus: Function,
}

const handleSearchCities = (setLoadingStatus: Function) => {
    setLoadingStatus(true);
    setTimeout(() => setLoadingStatus(false), 3000);
}

const DepartureTime = (props: IProps) => {
    const { departureTime, setQuestionNumber, updateAnswers, question, goPrevButtonHandler, setLoadingStatus } = props;
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
                <Button
                    className={`second ${state.length ? 'search-button' : ''}`}
                    isDisabled={!state.length}
                    onClick={() => handleSearchCities(setLoadingStatus)}
                >
                    Search!
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureTime);
