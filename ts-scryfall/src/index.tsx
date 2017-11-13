import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppContainer } from './appContainer';
import registerServiceWorker from './registerServiceWorker';
import './css/scryfall.css';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
