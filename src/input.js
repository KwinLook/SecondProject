import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
export default class Input extends React.Component {
 constructor(){
 super();
 this.state = {text:''}
    }
    render(){
 return(
 <TextInput style={styles.input} value={this.state.text}
 placeholder='พิมพ์สิ่งที่ต้องการทำ จากนั้น กด Enter'/>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height:50,
        padding:15
    }

})
