import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-listitem',
  templateUrl: './todo-listitem.component.html',
  styleUrls: ['./todo-listitem.component.css']
})
export class TodoListitemComponent implements OnInit {
  todo = "";
  @Input ()todos:any[]=[];
  @Input ()selectedindex:any;
  @Output  () deletevalue =new EventEmitter();
  @Output () edittodo =new EventEmitter();

  // constructor() {
  //   this.localitem = localStorage.getItem("todolist")
  //   if (this.localitem == null) {
  //     this.todos = [];
  //   } else {
  //     this.todos = JSON.parse(this.localitem)

  //   }

  // }
  ngOnInit(): void {
  }

  changeValue($event: any) {
    localStorage.setItem("todolist", JSON.stringify(this.todos))
  }
  editbtn(item: any, index: number) {
    this.todo = item.Name;
    this.selectedindex = index;
    console.warn(this.todo)
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    // this.show = !this.show;
    // this.showme = !this.showme;
    this.edittodo.emit({item,index})
    // console.log(item,index)

  }
  delteitem(index: number) {
    this.deletevalue.emit(index)
     console.warn(index)
  }


}
