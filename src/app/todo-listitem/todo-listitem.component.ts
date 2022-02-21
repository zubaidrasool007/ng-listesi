import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-listitem',
  templateUrl: './todo-listitem.component.html',
  styleUrls: ['./todo-listitem.component.css']
})
export class TodoListitemComponent implements OnInit {
  todo = "";
  @Input ()todos:any[]=[];
  @Output  () deletevalue =new EventEmitter();
  @Output () edittodo =new EventEmitter();



  ngOnInit(): void {
  
    
  }

  changeValue($event: any) {
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }

  editbtn(item: any, index: number) {
    this.edittodo.emit({item,index})

  }
  delteitem(index: number) {
    this.deletevalue.emit(index)
     console.warn(index)
  }


}
