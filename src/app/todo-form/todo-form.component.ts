import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
   @Input() todo="";
  @Input () todos:any=[];
  @Input () selectedindex:any;
  @Input () editItem = null;
  

  // @Input () showme=true;
  @Output  () additem =new EventEmitter();
  @Output () updateitem =new EventEmitter();
  @Output () todoitem =new EventEmitter()


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
  updatebtn(item:any) {
  
  
    // this.show = !this.show;
    // this.showme = !this.showme;
    this.updateitem.emit(item);
    this.todo = "";
   
    console.log("item",item)
  }

}
