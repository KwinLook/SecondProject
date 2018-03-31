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
import todoStore from './src/store/todoStore'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header todoStore={todoStore}/>
        <Input todoStore={todoStore}/>
        <List  todoStore={todoStore}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
