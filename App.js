/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './src/header';
import Input from './src/input';
import List from './src/list';
import store from '/src/store/store'
import {Provider} from 'mobx-react/native'

export default class App extends React.Component {
  render() {
    return (
    <Provider {...store}>
      <View style={styles.container}>
        <Header />
        <Input />
        <List  />
      </View>
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
