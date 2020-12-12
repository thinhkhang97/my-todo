import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Home from './src/screens/home';

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
