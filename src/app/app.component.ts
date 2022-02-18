import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';

  
  show = false;
  showme = true;
  
  localitem: any;
  todo = "";
  todos: any[] = [];
  selectedindex: any;
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
      this.todos.push(todo);
      localStorage.setItem("todolist", JSON.stringify(this.todos))

    }
  }
  editbtn(item: any) {
    this.todo = item.Name;
    this.selectedindex = item.index;
    console.warn(item)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    // this.show = !this.show;
    // this.showme = !this.showme;

  }
  updatebtn(item:any) {
    this.todos[this.selectedindex as number].Name = this.todo;
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    this.show = !this.show;
    this.showme = !this.showme;
    this.todo = "";

  }
  delteitem(index: number) {
    this.todos.splice(index, 1)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    console.warn(index)
  }
}
