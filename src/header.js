import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react/native';

// @inject('todoStore')
@observer
export default class Header extends React.Component{

  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
        <Button style={styles.button}
          onPress={()=>this.props.todoStore.addTodo()}
          title="Add"
          color="#841584"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    padding:25,
    backgroundColor:'skyblue',
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
