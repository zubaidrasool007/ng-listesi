import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo=""
  @Input () todos:any=[];
  @Input () selectedindex:any;
  // @Input () show=false;
  // @Input () showme=true;
  @Output  () additem =new EventEmitter();
  @Output () updateitem =new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addtodo(todo:any) { 
    if (this.todo.length > 4) {
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
      this.additem.emit(todo)

    }
  }
  updatebtn(item:any) {
    this.todos[this.selectedindex as number].Name = this.todo;
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    // this.show = !this.show;
    // this.showme = !this.showme;
    this.todo = "";
    this.updateitem.emit(item);
  }

}
