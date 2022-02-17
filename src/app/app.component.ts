import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  
  log(x:any){console.log(x)}
  todo ="";
  todos:any[]=[];
  addtodo(todo:any){
    if(this.todo.length >4){
       this.todos.push(todo);      
       this.todo="";
       console.warn(this.todos)
       
    }
  }

  delteitem(item:number){
    this.todos.splice(item,1)
    console.warn(item)
  } 
}
