import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.scss';

import { store, history } from './store/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <h1 className="testClass">Hello, World!</h1>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
