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
    setToursLoadingStatus: Function,
}

const mapStateToProps = (state: any) => {
    return {
        areToursLoading: state.app.areToursLoading,
        chosenCity: state.app.chosenCity,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setChosenCity: (cityName: string) => {
            dispatch(appAction.setChosenCity(cityName));
        },
        setToursLoadingStatus: (status: boolean) => {
            dispatch(appAction.setToursLoadingStatus(status));
        }
    }
}

const handleCityClick = (e: React.MouseEvent, setChosenCity: Function, setToursLoadingStatus: Function) => {
    const cityName = e.currentTarget.id.split('__')[1];
    setToursLoadingStatus(true);
    setTimeout(() => {
        setToursLoadingStatus(false);
    }, 3000);
    setChosenCity(cityName);
}

const CitiesList = (props: IProps) => {
    const { citiesToChooseFrom, setChosenCity, chosenCity, areToursLoading, setToursLoadingStatus } = props;
    const [isSpinnerAnimationActive, setSpinnerAnimationStatus] = useState(false);

    const renderCityItem = (city: any, isDisabled?: boolean) => {
        return (
            <div
                className={`cities-list-container__item ${isDisabled ? 'cities-list-container__item--disabled' : ''}`}
                id={`citiesList__${city.name}`}
                onClick={(e) => handleCityClick(e, setChosenCity, setToursLoadingStatus)}
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
                (citiesToChooseFrom as Array<[citiesToChooseFrom] | []>).map((city: any) => {
                    return (
                        <>
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
                        </>
                    )
                })
            }
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
