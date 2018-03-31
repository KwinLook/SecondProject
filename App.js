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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
