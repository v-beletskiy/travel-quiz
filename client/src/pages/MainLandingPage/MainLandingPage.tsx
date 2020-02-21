import React from 'react';
import './style.scss';
import Button from './../../components/shared/Button/Button';
const FacebookIcon = require("../../assets/icons/facebookIcon.svg").default;
const GoogleIcon = require("../../assets/icons/googleIcon.svg").default;

interface IProps {
    signUpLocal: Function,
    signInLocal: Function,
    signUpAndInSocial: Function,
    signOut: Function,
    setAuthData: Function,
}

interface IState {
    emailSignUp: String,
    emailSignIn: String,
    passwordSignUp: String,
    passwordSignIn: String,
    firstName: String,
    lastName: String,
    enterType: String,
}

class MainPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            emailSignUp: '',
            emailSignIn: '',
            passwordSignUp: '',
            passwordSignIn: '',
            firstName: '',
            lastName: '',
            enterType: 'signin',
        }
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const eventName = event.currentTarget.name;
        const value = event.currentTarget.value;
        switch (eventName) {
            case 'localEmailSignUp': {
                this.setState({ emailSignUp: value });
                break;
            }
            case 'localEmailSignIn': {
                this.setState({ emailSignIn: value });
                break;
            }
            case 'localPasswordSignUp': {
                this.setState({ passwordSignUp: value });
                break;
            }
            case 'localPasswordSignIn': {
                this.setState({ passwordSignIn: value });
                break;
            }
            case 'firstName': {
                this.setState({ firstName: value });
                break;
            }
            case 'lastName': {
                this.setState({ lastName: value });
                break;
            }
        }
    }

    changeEnterType = (enterType: string) => {
        this.setState({ enterType });
    }

    render() {
        const { signUpLocal, signInLocal, signUpAndInSocial, setAuthData } = this.props;
        const { emailSignUp, emailSignIn, passwordSignUp, passwordSignIn, firstName, lastName, enterType } = this.state;
        return (
            <div className="landing-page">
                <h1 className="landing-page__header">Welcome to Travel Quiz!</h1>
                <div className="landing-page__enter-type-container">
                    <Button
                        onClick={() => this.changeEnterType('signin')}
                        className={`landing-page__enter-type-container__button ${enterType === 'signin' ? 'landing-page__enter-type-container__button--active' : ''}`}
                    >
                        Sign in
                    </Button>
                    <Button
                        onClick={() => this.changeEnterType('signup')}
                        className={`landing-page__enter-type-container__button ${enterType === 'signup' ? 'landing-page__enter-type-container__button--active' : ''}`}
                    >
                        Sign up
                    </Button>
                </div>
                {enterType === 'signup' ?
                    <div className="landing-page__sign-container">
                        <p className="landing-page__sign-container__header">Sign up via email and login</p>
                        <input type="email" name="localEmailSignUp" placeholder="enter your email" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <input type="password" name="localPasswordSignUp" placeholder="enter your password" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <input type="text" name="firstName" placeholder="enter your name" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <input type="text" name="lastName" placeholder="enter your surname" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <Button className="landing-page__sign-container__button" onClick={() => { signUpLocal(emailSignUp, passwordSignUp, firstName, lastName) }}>
                            Submit
                        </Button>
                    </div> :
                    <div className="landing-page__sign-container">
                        <p className="landing-page__sign-container__header">Sign in via email and login</p>
                        <input type="email" name="localEmailSignIn" placeholder="enter your email" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <input type="password" name="localPasswordSignIn" placeholder="enter your password" className="landing-page__sign-container__input" onChange={this.handleChange} />
                        <Button className="landing-page__sign-container__button" onClick={() => { signInLocal(emailSignIn, passwordSignIn, setAuthData) }}>
                            Submit
                        </Button>
                    </div>
                }
                <div className="landing-page__sign-container">
                    <p className="landing-page__sign-container__header">Enter via Google or Facebook</p>
                    <div className="landing-page__social-button-container landing-page__google-button-container" onClick={() => signUpAndInSocial('google')}>
                        <div className="landing-page__social-button-container__icon"><GoogleIcon /></div>
                        <div className="landing-page__social-button-container__text"><p>Enter via Google</p></div>
                    </div>
                    <div className="landing-page__social-button-container" onClick={() => signUpAndInSocial('facebook')}>
                        <div className="landing-page__social-button-container__icon"><FacebookIcon /></div>
                        <div className="landing-page__social-button-container__text"><p>Enter via Facebook</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
