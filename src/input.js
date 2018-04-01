import React from 'react';
import {TextInput,StyleSheet,Vibration} from 'react-native';
import { observer , inject } from 'mobx-react/native'
import * as Animatable from 'react-native-animatable';

@inject('todoStore')
@observer
export default class Input extends React.Component {
    constructor(){
        super();
        this.state = {text:'',error:false}
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }
    onSubmitEditing(){
        // this.props.todoStore.list
        // = [this.state.text,...this.props.todoStore.list];
        // //this.props.todoStore.text = '';
        if(this.props.todoStore.text != ''){
          this.setState({error: false})
          this.props.todoStore.addTodo();
        }else{
          this.setState({error: true})
          this.refs.view.bounce(800);
          Vibration.vibrate();
        }
    }
    render(){
        return(
    <Animatable.View ref="view"
      style={[{borderColor:'gray',borderWidth:1}
        ,this.state.error && {borderColor:'red',borderWidth:1}]}>
      <TextInput style = { styles.input }
      value = { this.props.todoStore.text }
      placeholder = 'พิมพ์สิ่งที่ต้องการทำ จากนั้น กด Enter'
      onChangeText = { (text) => {
                          this.props.todoStore.text = text
                          this.setState({error:false})
      } }
      returnKeyType={ 'done' }
      returnKeyLabel={ 'done' }
      onSubmitEditing={this.onSubmitEditing}
      />
    </Animatable.View>
    )
  }
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15
  }

})
