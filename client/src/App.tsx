import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store/store';
import './styles/normalize.scss';
import './styles/style.scss';
import './styles/fonts.scss';
import withAuth from './HOCs/withAuth';
import UserService from './services/UserService';
import { resetAppState } from './actions/app/actions';

import MainLandingPage from './pages/MainLandingPage/MainLandingPage';
import MainPage from './pages/MainPage/MainPage';

interface IState {
    accessTokenUpdated: boolean,
}
class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            accessTokenUpdated: false,
        };
    }

    setAuthData = (authData: string[]) => {
        const [accessToken] = authData;
        sessionStorage.setItem('accessToken', accessToken);
        this.setState({ accessTokenUpdated: true });
    }

    resetAuthData = () => {
        sessionStorage.removeItem('accessToken');
        this.setState({ accessTokenUpdated: true });
        resetAppState();
    }

    render() {
        const accessToken = sessionStorage.getItem('accessToken');
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="app">
                        <Switch>
                            {UserService.isAuthenticated([accessToken]) ?
                                <Route path="/" exact component={withAuth(MainPage, this.setAuthData, this.resetAuthData)} /> :
                                <Route path="/" exact component={withAuth(MainLandingPage, this.setAuthData, this.resetAuthData)} />
                            }
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
