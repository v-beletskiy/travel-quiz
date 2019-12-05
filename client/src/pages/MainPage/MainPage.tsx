import React, { useState, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './style.scss';
import Stepper from './QuestionnaireSteps/Stepper';
import CitiesList from './CitiesList/CitiesList';
import { citiesToChooseFrom } from '../../reducers/types/app';
import { questionComponents } from '../../data/Questions/questions';

interface IProps {
    firstName: string,
    lastName: string,
    citiesToChooseFrom: [citiesToChooseFrom] | [],
    isLoading: boolean,
    question: number,
}

const mapStateToProps = (state: any) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        citiesToChooseFrom: state.app.citiesToChooseFrom,
        isLoading: state.app.isLoading,
        question: state.app.question,
    }
}

const navigationItems = [
    { name: 'Search', link: '/' },
    { name: 'Saved', link: '/saved' },
];

const MainLandingPage = (props: IProps) => {
    const { firstName, lastName, citiesToChooseFrom, isLoading, question } = props;
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);

    const citiesList = useRef(null);
    useLayoutEffect(() => {
        if (citiesList.current && question === questionComponents.length && !isLoading && !isMobileMenuOpen) {
            const offsetTop = citiesList.current.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });

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
            </main>
            <Footer visible={isMobileMenuOpen} />
        </>
    )
}

export default connect(mapStateToProps, null)(MainLandingPage);
