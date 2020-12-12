/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactElement} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

const App: () => ReactElement = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello world</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
