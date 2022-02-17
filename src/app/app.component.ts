import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';

  log(x: any) { console.log(x) }
  show = false;
  showme = true;
  
  localitem: any;
  todo = "";
  todos: any[] = [];
  selectedindex: any;
  // savevalue:boolean;

  constructor() {
    this.localitem = localStorage.getItem("todolist")
    if (this.localitem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem)

    }

  }
  changeValue($event:any){
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }

  addtodo(todo:any) { 
    if (this.todo.length > 4) {
      // this.todos.push(todo);
     let x = Math.random() * 100;
      console.warn(this.todos)

      this.todo = "";
      let objectitem = {
        id:"ubiqid"+x,
        Name: todo,
        Completed:false
      }
      console.warn(objectitem)
      this.todos.push(objectitem);
      localStorage.setItem("todolist", JSON.stringify(this.todos))

    }
  }

  editbtn(item: any, index: number) {
    this.todo = item.Name;
    this.selectedindex = index;
    console.warn(this.todo)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    this.show = !this.show;
    this.showme = !this.showme;
    // console.warn(item)

  }
  updatebtn(item:any) {

    this.todos[this.selectedindex as number].Name = this.todo;
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    this.show = !this.show;
    this.showme = !this.showme;
    this.todo = "";

  }

  delteitem(index: number) {
    // let index:number =this.todos.findIndex(function(e){
    //    if(e ===item){
    //      return true
    //    }else{
    //      return false
    //    }
    // })

    // if(index!== -1){
    //   this.todos.splice(index, 1);
    // }
    this.todos.splice(index, 1)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    console.warn(index)
  }
}
