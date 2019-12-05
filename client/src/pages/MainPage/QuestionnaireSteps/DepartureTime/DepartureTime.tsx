import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import RadioButton from '../../../../components/shared/RadioButton/RadioButton';
import Button from '../../../../components/shared/Button/Button';
import { departureData } from '../../../../data/Questions/departure';
import { appAction } from '../../../../actions';
import { natureType, restType, citiesToChooseFrom } from '../../../../reducers/types/app';
import '../style.scss';

const mapStateToProps = (state: any) => {
    return {
        departureTime: state.app.answers.departureTime,
        temperature: state.app.answers.temperature,
        nature: state.app.answers.nature,
        restTypes: state.app.answers.restTypes,
        citiesToChooseFrom: state.app.citiesToChooseFrom,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setLoadingStatus: (status: boolean) => {
            dispatch(appAction.setLoadingStatus(status));
        },
        searchSuitableCities: (temperature: number, nature: natureType, restTypes: restType) => {
            dispatch(appAction.searchSuitableCities(temperature, nature, restTypes));
        },
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
    temperature: number,
    nature: natureType,
    restTypes: restType,
    searchSuitableCities: Function,
    citiesToChooseFrom: [citiesToChooseFrom] | [],
}

const handleSearchCities = (setLoadingStatus: Function, searchSuitableCities: Function, temperature: number, nature: natureType, restTypes: restType) => {
    setLoadingStatus(true);
    searchSuitableCities(temperature, nature, restTypes);
    setTimeout(() => setLoadingStatus(false), 3000);
}

const DepartureTime = (props: IProps) => {
    const {
        departureTime, setQuestionNumber, updateAnswers, question, goPrevButtonHandler, goNextButtonHandler, setLoadingStatus, searchSuitableCities,
        temperature, nature, restTypes, citiesToChooseFrom,
    } = props;
    const [state, setDepartureTime] = useState(departureTime);
    useLayoutEffect(() => {
        if (window.scrollY !== 0 && !citiesToChooseFrom.length) {
            window.scrollTo(0, 0);
        }
    }, [])

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
                    onClick={() => {
                        goNextButtonHandler(setQuestionNumber, updateAnswers, state, 'departure', question);
                        handleSearchCities(setLoadingStatus, searchSuitableCities, temperature, nature, restTypes)
                    }}
                >
                    Search!
                </Button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureTime);
