import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './style.scss';
import Stepper from './QuestionnaireSteps/Stepper';
import CitiesList from './CitiesList/CitiesList';
import { citiesToChooseFrom } from '../../reducers/types/app';
import { questionComponents } from '../../data/Questions/questions';
import ChosenCity from './ChosenCity/ChosenCity';
import Tours from './Tours/Tours';

interface IProps {
    firstName: string,
    lastName: string,
    citiesToChooseFrom: [citiesToChooseFrom] | [],
    isLoading: boolean,
    question: number,
    chosenCity: string,
    areToursLoading: string,
    signOut: Function,
}

const mapStateToProps = (state: any) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        citiesToChooseFrom: state.app.citiesToChooseFrom,
        isLoading: state.app.isLoading,
        question: state.app.question,
        chosenCity: state.app.chosenCity,
        areToursLoading: state.app.areToursLoading,
    }
}

const navigationItems = [
    { name: 'Search', link: '/' },
    { name: 'Saved', link: '/saved' },
];

const MainLandingPage = (props: IProps) => {
    const { firstName, lastName, citiesToChooseFrom, isLoading, question, chosenCity, areToursLoading, signOut } = props;
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);
    const [scrolledTo, setScrollTo] = useState({ citiesList: false, chosenCity: false });

    const citiesList = useRef(null);
    const chosenCityContainer = useRef(null);
    useLayoutEffect(() => {
        if (question === questionComponents.length && !isLoading && !isMobileMenuOpen) {
            if (citiesList.current && !scrolledTo.citiesList) {
                const citiesListOffsetTop = citiesList.current.offsetTop;
                window.scrollTo({ top: citiesListOffsetTop, behavior: 'smooth' });
                setScrollTo({ ...scrolledTo, citiesList: true });
            } else if (chosenCityContainer.current && chosenCity && !areToursLoading && !scrolledTo.chosenCity) {
                const chosenCityContainerOffsetTop = chosenCityContainer.current.offsetTop;
                window.scrollTo({ top: chosenCityContainerOffsetTop, behavior: 'smooth' });
                setScrollTo({ ...scrolledTo, chosenCity: true });
            }
        }
    });

    // Start reset scroll status to enable scrolling after search has been done one more time or another city has been chosen.
    const usePrevData = (loadingData: { isLoading: boolean, areToursLoading: string }) => {
        const previousData = useRef(loadingData);
        useEffect(() => {
            previousData.current = loadingData;
        }, [isLoading, areToursLoading]);
        return previousData.current;
    }

    const previousLoadingValues = usePrevData({ isLoading, areToursLoading });
    useEffect(() => {
        if (previousLoadingValues.isLoading !== isLoading) {
            setScrollTo({ ...scrolledTo, citiesList: false });
        } else if (previousLoadingValues.areToursLoading !== areToursLoading) {
            setScrollTo({ ...scrolledTo, chosenCity: false });
        }
    }, [isLoading, areToursLoading])
    // End reset scroll

    const toggleMobileMenu = () => {
        document.body.style.overflow = isMobileMenuOpen ? 'visible' : 'hidden';
        setMobileMenuStatus(!isMobileMenuOpen);
    }

    return (
        <>
            <Header
                navigationItems={navigationItems}
                name={`${firstName} ${lastName}`}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                signOut={signOut}
            />
            <main className="container">
                <div className="questionnaire-container">
                    <Stepper />
                </div>
                <CSSTransition
                    in={citiesToChooseFrom.length && !isLoading && question === questionComponents.length ? true : false}
                    timeout={1500}
                    unmountOnExit
                    classNames="cities-list-container"
                >
                    <div ref={citiesList}>
                        <CitiesList citiesToChooseFrom={citiesToChooseFrom} />
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={chosenCity && !isLoading && question === questionComponents.length && !areToursLoading ? true : false}
                    timeout={1500}
                    unmountOnExit
                    classNames="chosen-city-container"
                >
                    <div ref={chosenCityContainer}>
                        <ChosenCity />
                        <Tours />
                    </div>
                </CSSTransition>
            </main>
            <Footer visible={isMobileMenuOpen} />
        </>
    )
}

export default connect(mapStateToProps, null)(MainLandingPage);
