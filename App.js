// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View
// } from 'react-native';
// import Header from './src/header';
// import Input from './src/input';
// import List from './src/list';
//
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header />
//         <Input />
//         <List />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   }
// });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import Input from './src/input';
import List from './src/list'

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={list:['Click to Remove','แปรงฟัน','อาบน้ำ'],}
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  removeTodo(index){
    let tmpList = [...this.state.list];
    tmpList = tmpList.filter((tmp,i)=>i!=index)
    this.setState({list:tmpList})
}
addTodo(text) {
  let tmpList = [...this.state.list];
  tmpList.unshift(text);
  this.setState({list:tmpList});
}
  render() {
    return (
      <View  style={styles.container} >
      <Header  />
      <Input onSubmitEditing={this.addTodo} />
      <List list={this.state.list} onPressItem={this.removeTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
