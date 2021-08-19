/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import RootContainer from './RootContainer';

const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <RootContainer />
    </Provider>
  );
};

export default App;