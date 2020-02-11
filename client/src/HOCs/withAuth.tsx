import * as React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';
import { authStrategyTypes } from '../../../server/src/data/authRoles';

const mapDispatchToProps = (dispatch: any) => {
    return {
        signUpLocal: (email: String, password: String) => {
            dispatch(userAction.signUpLocal(email, password));
        },
        signInLocal: (email: String, password: String, setAuthData: Function) => {
            dispatch(userAction.signInLocal(email, password, setAuthData))
        },
        signUpInSocial: (type: String, data: any, actionType: String, setAuthData: Function) => {
            dispatch(userAction.signUpInSocial(type, data, actionType, setAuthData));
        },
        logOut: () => {
            dispatch(userAction.logOut());
        },
    }
}

const getErrorMes = (actionType: String) => {
    let errorMes = '';
    switch (actionType) {
        case 'signin': {
            errorMes = 'sign in';
        }
        case 'signup': {
            errorMes = 'sign up';
        }
    }
    return errorMes;
}

const googleAuth = (actionType: String, signUpInSocial: Function, setAuthData: Function) => {
    let errorMes = getErrorMes(actionType);
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn()
        .then(user => {
            signUpInSocial(authStrategyTypes.google, user, actionType, setAuthData);
        })
        .catch(err => { console.log(`Google ${errorMes} failed.`, err) });
}

const facebookAuth = (actionType: String, signUpInSocial: Function, setAuthData: Function) => {
    let errorMes = getErrorMes(actionType);
    window.FB.login(res => {
        if (res.authResponse) {
            signUpInSocial(authStrategyTypes.facebook, res.authResponse, actionType, setAuthData);
        } else {
            console.log(`Facebook ${errorMes} failed.`);
        }
    }, { scope: 'email', return_scopes: true, })
}
interface WrapperComponentProps {
    signUpLocal: Function,
    signInLocal: Function,
    signUpSocial: Function,
    signInSocial: Function,
    signOut: Function,
    setAuthData: Function,
}

export default function withAuth(WrappedComponent: React.ComponentType<WrapperComponentProps>, setAuthData: Function, resetAuthData: Function) {
    interface IProps {
        signUpLocal: Function,
        signInLocal: Function,
        signUpInSocial: Function,
        logOut: Function,
    }

    class withAuth extends React.Component<IProps> {
        componentDidMount() {
            this.initAuth(authStrategyTypes.google);
            this.initAuth(authStrategyTypes.facebook);
        }

        initAuth(type: String) {
            switch (type) {
                case authStrategyTypes.google: {
                    const metaGoogleAuth = document.createElement('meta');
                    metaGoogleAuth.name = "google-signin-client_id";
                    metaGoogleAuth.content = `${process.env.GOOGLE_AUTH_CLIENT_ID}`;
                    document.getElementsByTagName('head')[0].appendChild(metaGoogleAuth);
                    if (window.gapi) {
                        window.gapi.load('auth2', () => {
                            window.gapi.auth2.init(
                                {
                                    client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
                                })
                        })
                    }
                    break;
                }
                case authStrategyTypes.facebook: {
                    if (window.FB) {
                        window.FB.init({
                            appId: process.env.FACEBOOK_AUTH_APP_ID,
                            status: true,
                            version: process.env.FACEBOOK_API_VERSION,
                        });
                    }
                    break;
                }
            }
        }

        signUpSocial = (type: String) => {
            const { signUpInSocial } = this.props;
            switch (type) {
                case authStrategyTypes.google: {
                    googleAuth('signup', signUpInSocial, setAuthData);
                    break;
                }
                case authStrategyTypes.facebook: {
                    facebookAuth('signup', signUpInSocial, setAuthData);
                    break;
                }
            }
        }

        signInSocial = (type: String) => {
            const { signUpInSocial } = this.props;
            switch (type) {
                case authStrategyTypes.google: {
                    googleAuth('signin', signUpInSocial, setAuthData);
                    break;
                }
                case authStrategyTypes.facebook: {
                    facebookAuth('signin', signUpInSocial, setAuthData);
                    break;
                }
            }
        }

        signOut = (type: String) => {
            const { logOut } = this.props;
            resetAuthData();
            logOut();
            switch (type) {
                case authStrategyTypes.google: {
                    const GoogleAuth = window.gapi.auth2.getAuthInstance();
                    GoogleAuth.signOut();
                    break;
                }
                case authStrategyTypes.facebook: {
                    window.FB.logout();
                    break;
                }
            }
        }

        render() {
            const { signUpLocal, signInLocal } = this.props;
            const authMethods = { signUpLocal, signInLocal, signUpSocial: this.signUpSocial, signInSocial: this.signInSocial, signOut: this.signOut, setAuthData };
            return (
                <WrappedComponent {...authMethods} {...this.props} />
            )
        }
    }
    return connect(null, mapDispatchToProps)(withAuth);
}
