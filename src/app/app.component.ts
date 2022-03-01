import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
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
  addtodo(data:any) { 
      
      this.todos.push(data);
      localStorage.setItem("todolist", JSON.stringify(this.todos))
  }
  editData(data: any) {
    console.log("todo",this.todo)
    this.todo = data.item.Name;
    this.selectedindex = data.index;
    
    console.log(data.item.Name)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    // this.show = !this.show;
    // this.showme = !this.showme;
    

  }
  updatebtn(data:any) {
    console.log("data" , data)
    this.todos[this.selectedindex as number].Name = data;
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    // this.show = !this.show;
    // this.showme = !this.showme;
    this.todo = "";
  }
  delteitem(index: number) {
    this.todos.splice(index, 1)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    console.warn(index)
  }
}
