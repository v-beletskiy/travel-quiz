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

import MainLandingPage from './pages/MainLandingPage/MainLandingPage';
import MainPage from './pages/MainPage/MainPage';

interface IState {
    accessToken: String,
}
class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            accessToken: '',
        };
    }

    setAuthData = (authData: String[]) => {
        const [accessToken] = authData;
        this.setState({ accessToken });
    }

    resetAuthData = () => {
        this.setState({ accessToken: '' });
    }

    render() {
        const { accessToken } = this.state;
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
