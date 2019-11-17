import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './style.scss';
import Temperature from './QuestionnaireStepsComponents/Temperature/Temperature';

interface IProps {
    firstName: string,
    lastName: string,
}

const mapStateToProps = (state: any) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    }
}

const navigationItems = [
    { name: 'Search', link: '/' },
    { name: 'Saved', link: '/saved' },
];

const MainLandingPage = (props: IProps) => {
    const { firstName, lastName } = props;
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);
    const toggleMobileMenu = () => {
        document.body.style.overflow = isMobileMenuOpen ? 'visible' : 'hidden';
        setMobileMenuStatus(!isMobileMenuOpen);
    }
    return (
        <>
            <Header navigationItems={navigationItems} name={`${firstName} ${lastName}`} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <main className="container">
                <div className="questionnaire-container">
                    <Temperature />
                </div>
            </main>
            <Footer visible={isMobileMenuOpen} />
        </>
    )
}

export default connect(mapStateToProps, null)(MainLandingPage);
