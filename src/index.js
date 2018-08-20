import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import RootStore from './store/RootStore';
import registerServiceWorker from './registerServiceWorker';

const store = new RootStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
