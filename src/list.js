import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
export default class List extends React.Component {
  constructor(){
    super();
    this.state = {list:['Click to Remove' , 'แปรงฟัน' , 'อาบน้ำ'] }

  }
  render() {
    return (
      <View>
            {this.state.list.map((text,i)=>
              (
                <View key={i} style={{backgroundColor:'whitesmoke',padding:15,marginBottom: 5}}>
                    <Text>{text}</Text>
                </View>
              )
            )}
      </View>
    )
  }
}
const styles = StyleSheet.create({

})
