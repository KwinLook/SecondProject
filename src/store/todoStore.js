import {observable} from 'mobx'

class TodoStore {
    @observable list = ['Click to Remove','แปรงฟัน','อาบน้ำ'];
}

const todoStore = new TodoStore()
export default todoStore
