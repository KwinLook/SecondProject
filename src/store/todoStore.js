import {
  observable
} from 'mobx'
import { AsynStorage } from 'react-native'

export default class TodoStore {
  @observable list = ['Click to Remove', 'แปรงฟัน', 'อาบน้ำ'];
  @observable text = '';
  async addTodo() {
    if (this.text !='' ) {
      this.list = [this.text, ...this.list];
      this.text = '';
      await AsyncStorage.setItem("todoList",JSON.stringify(this.list))
    }
  }
  async getTodoList(){
        this.list =  JSON.parse(await AsyncStorage.getItem("todoList")) || [];
  }
}
