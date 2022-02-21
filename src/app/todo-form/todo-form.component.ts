import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo="";
  @Input () todos:any=[];
  @Input () selectedindex:any;
  // @Input () show=false;
  // @Input () showme=true;
  @Output  () additem =new EventEmitter();
  @Output () updateitem =new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addtodo(value:any) { 
    if (value.length > 4) {
     let x = Math.random() * 100;

      let objectitem = {
        id:"ubiqid"+x,
        Name: value,
        Completed:false
      }
  
      this.additem.emit(objectitem )
      this.todo = "";

    }
  }
  // updatebtn(item:any) {
  //   this.todos[this.selectedindex as number].Name = this.todo;
  //   localStorage.setItem("todolist", JSON.stringify(this.todos))
  //   // this.show = !this.show;
  //   // this.showme = !this.showme;
  //   this.todo = "";
  //   this.updateitem.emit(item);
  // }

}
