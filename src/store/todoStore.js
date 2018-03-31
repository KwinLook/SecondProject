import {
  observable
} from 'mobx'

class TodoStore {
  @observable list = ['Click to Remove', 'แปรงฟัน', 'อาบน้ำ'];
  @observable text = '';
  addTodo() {
    if (this.text !='' ) {
      this.list = [this.text, ...this.list];
      this.text = '';
    }
  }
}

const todoStore = new TodoStore()
export default todoStore
