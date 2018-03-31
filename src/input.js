// import React from 'react';
// import {
//   TextInput,
//   StyleSheet
// } from 'react-native';
// export default class Input extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: ''
//     }
//     this.onSubmitEditing = this.onSubmitEditing.bind(this);
//   }
//   onSubmitEditing(){
//     this.setState({text:''});
//   }
//   render() {
//     return ( <
//       TextInput style = {
//         styles.input
//       }
//       value = {
//         this.state.text
//       }
//       placeholder = 'พิมพ์สิ่งที่ต้องการทำ จากนั้น กด Enter'
//       onChangeText = { (text) => this.setState({ text: text })}
//       //returnKeyType =ios
//       returnKeyType={ 'done' }
//       returnKeyLabel={ 'done' }
//       onSubmitEditing={this.onSubmitEditing}
//
//       />
//     )
//   }
// }
// const styles = StyleSheet.create({
//   input: {
//     height: 50,
//     padding: 15
//   }
//
// })


import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
export default class Input extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
    }
    onSubmitEditing() {
        this.setState({ text: '' });
        this.props.onSubmitEditing(this.state.text);
      }

    render() {
        return (
            <TextInput style={styles.input} value={this.state.text}
                placeholder='พิมพ์ชื่อ ที่ท่านต้องการ แล้วกดดัน'
                onChangeText={(text) => this.setState({ text: text })}
                onSubmitEditing={this.onSubmitEditing}
                returnKeyType={'done'} //returnKeyType use for IOS
                returnKeyLabel={'done'} //returnKeyLabel use for Android
            />
        )
    }
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
    }

})
