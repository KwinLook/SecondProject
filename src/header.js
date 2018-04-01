import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { observer , inject } from 'mobx-react/native';
import * as Animatable from 'react-native-animatable';

@inject('todoStore')
@observer
export default class Header extends React.Component{

  render(){
    return (
      <Animatable.View style={styles.header}  animation="bounce" delay={500}>
        <Text style={styles.text}>K'winLook</Text>
        <Button style={styles.button}
          onPress={()=>this.props.todoStore.addTodo()}
          title="Add"
          color="#841584"
          />
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    padding:25,
    backgroundColor:'#2aa3ef',
    flexDirection:'row'
  },
  text:{
    textAlign:'center',
    flex:1
  },
  button:{
    flex:0.2

  }
});
