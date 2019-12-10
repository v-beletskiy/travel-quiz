import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './style.scss';
import { citiesToChooseFrom } from '../../../reducers/types/app';
import { appAction } from '../../../actions';
import Spinner from '../../../components/shared/Spinner/Spinner';

interface IProps {
    citiesToChooseFrom: [citiesToChooseFrom] | [],
    setChosenCity: Function,
    chosenCity: string,
    areToursLoading: boolean,
    loadTours: Function,
    budget: number,
    departureTime: string,
    persons: string,
}

const mapStateToProps = (state: any) => {
    return {
        areToursLoading: state.app.areToursLoading,
        chosenCity: state.app.chosenCity,
        budget: state.app.answers.budget,
        departureTime: state.app.answers.departureTime,
        persons: state.app.answers.persons,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setChosenCity: (cityName: string) => {
            dispatch(appAction.setChosenCity(cityName));
        },
        loadTours: (cityName: string, budget: number, departureTime: string, persons: string) => {
            dispatch(appAction.loadTours(cityName, budget, departureTime, persons))
        },
    }
}

const handleCityClick = (e: React.MouseEvent, setChosenCity: Function, loadTours: Function, budget: number, departureTime: string, persons: string) => {
    const cityName = e.currentTarget.id.split('__')[1];
    loadTours(cityName, budget, departureTime, persons);
    setChosenCity(cityName);
}

const CitiesList = (props: IProps) => {
    const { citiesToChooseFrom, setChosenCity, chosenCity, areToursLoading, loadTours, budget, departureTime, persons } = props;
    const [isSpinnerAnimationActive, setSpinnerAnimationStatus] = useState(false);

    const renderCityItem = (city: citiesToChooseFrom, isDisabled?: boolean) => {
        return (
            <div
                className={`cities-list-container__item ${isDisabled ? 'cities-list-container__item--disabled' : ''}`}
                id={`citiesList__${city.name}`}
                onClick={(e) => handleCityClick(e, setChosenCity, loadTours, budget, departureTime, persons)}
            >

                <img src={`${process.env.LOCAL_URL}/static/images/cities/${city.img}`} key={city.name} />
                <div className="cities-list-container__item__shade">
                    <p>{city.name}</p>
                    <p className="cities-list-container__item__shade__temperature">{city.temperature}<sup>o</sup>C</p>
                </div>
            </div>
        )
    }

    return (
        <div className="cities-list-container">
            {
                (citiesToChooseFrom as Array<citiesToChooseFrom>).map(city => {
                    return (
                        <React.Fragment key={city.name}>
                            <CSSTransition
                                in={areToursLoading && city.name === chosenCity}
                                timeout={1500}
                                unmountOnExit
                                classNames="cities-list-container__spinner"
                                onEnter={() => setSpinnerAnimationStatus(true)}
                                onExited={() => {
                                    setSpinnerAnimationStatus(false);
                                }}
                            >
                                <div className="cities-list-container__spinner">
                                    <Spinner className="spinner__known-dimensions" />
                                </div>
                            </CSSTransition>
                            {
                                city.name === chosenCity ?
                                    <CSSTransition
                                        in={!areToursLoading && !isSpinnerAnimationActive}
                                        timeout={1500}
                                        unmountOnExit
                                        classNames="cities-list-container__item"
                                    >
                                        {renderCityItem(city)}
                                    </CSSTransition> : renderCityItem(city, areToursLoading || isSpinnerAnimationActive)
                            }
                        </React.Fragment>
                    )
                })
            }
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
