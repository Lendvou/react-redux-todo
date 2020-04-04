import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import Todos from './containers/todos';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
