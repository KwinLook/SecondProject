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
      <View style={{backgroundColor:'whitesmoke',padding:15,}}>
            {this.state.lst.map((text,i)=>{
              return(
                <View key={i}>
                    <Text>{text}</Text>
                </View>
              )
            })}
      </View>
    )
  }
}
const styles = StyleSheet.create({

})
