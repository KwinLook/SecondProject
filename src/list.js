import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
export default class List extends React.Component {
    constructor(){
        super();
        this.state = {list:['Click to Remove','แปรงฟัน','อาบน้ำ'],}
        this.removeTodo = this.removeTodo.bind(this);
        this
    }
    removeTodo(index){
        let tmpList = [...this.state.list];
        tmpList = tmpList.filter((tmp,i)=>i!=index)
        this.setState({list:tmpList})
    }
    render(){
        return(
            <View>
                {this.state.list.map((text,i)=>
                    (
                    <TouchableOpacity key={i} onPress={()=>this.removeTodo(i)}
                    style={{backgroundColor:'whitesmoke',padding:15,marginBottom:5}} >
                        <Text>{text}</Text>
                    </TouchableOpacity>
                    )
                )}
            </View>
        )
    }
}
const styles = StyleSheet.create({

})
