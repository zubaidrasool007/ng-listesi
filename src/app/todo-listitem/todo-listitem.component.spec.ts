import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListitemComponent } from './todo-listitem.component';

describe('TodoListitemComponent', () => {
  let component: TodoListitemComponent;
  let fixture: ComponentFixture<TodoListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
