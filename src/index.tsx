import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import App from './App';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
/* To use type assertion put 'as HTMLElement' or '!' */
registerServiceWorker();
