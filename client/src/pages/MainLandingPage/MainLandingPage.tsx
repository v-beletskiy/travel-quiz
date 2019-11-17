import React, { Component } from 'react';

interface IProps {
    signUpLocal: Function,
    signInLocal: Function,
    signUpSocial: Function,
    signInSocial: Function,
    signOut: Function,
    setAuthData: Function,
}

interface IState {
    emailSignUp: String,
    emailSignIn: String,
    passwordSignUp: String,
    passwordSignIn: String,
}

class MainPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            emailSignUp: '',
            emailSignIn: '',
            passwordSignUp: '',
            passwordSignIn: '',
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
        }
    }

    render() {
        const { signUpLocal, signInLocal, signUpSocial, signInSocial, signOut, setAuthData } = this.props;
        const { emailSignUp, emailSignIn, passwordSignUp, passwordSignIn } = this.state;
        return (
            <>
                <div>
                    <h1 className="testClass">Please, sign in!</h1>
                </div>
                <p>Sign up via email & login</p>
                <input type="email" name="localEmailSignUp" onChange={this.handleChange} />
                <input type="password" name="localPasswordSignUp" onChange={this.handleChange} />
                <button onClick={() => { signUpLocal(emailSignUp, passwordSignUp) }}>Submit</button>
                <p>Sign in via email & login</p>
                <input type="email" name="localEmailSignIn" onChange={this.handleChange} />
                <input type="password" name="localPasswordSignIn" onChange={this.handleChange} />
                <button onClick={() => { signInLocal(emailSignIn, passwordSignIn, setAuthData) }}>Submit</button>
                <button onClick={() => { signOut() }}>Sign out local</button>
                <br />
                <button onClick={() => signUpSocial('google')}>Google Sign up</button>
                <button onClick={() => signInSocial('google')}>Google Sign in</button>
                <button onClick={() => signOut('google')}>Google Sign out</button>
                <br />
                <button onClick={() => signUpSocial('facebook')}>Facebook Sign up</button>
                <button onClick={() => signInSocial('facebook')}>Facebook Sign in</button>
                <button onClick={() => signOut('facebook')}>Facebook Sign out</button>
            </>
        )
    }
}

export default MainPage;
