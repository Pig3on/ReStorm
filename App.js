/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store,persistor} from './src/config/configureStore';

import AppContainer from './src/MainNav';

const App = () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <AppContainer/> 
        </PersistGate>
      </Provider>
  );
};

export default App;
