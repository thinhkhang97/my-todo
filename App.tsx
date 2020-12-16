import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import {Home} from './src/screens/home';
import {ActivityIndicator} from 'react-native';

const App: () => ReactElement = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
