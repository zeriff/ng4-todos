import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: {title: string, done: boolean}[]= [];

  constructor(private todoService: TodoService) { 
    this.todoList = todoService.todoList;
  }

  ngOnInit() {
  }
  onToggle(item: {title: string, done: boolean}) {
    item.done = !item.done;
  } 
  onDelete(index: number){
    this.todoService.deleteTodo(index);
  }
  getRowStyle(item: {title: string, done: boolean}) {
    return {
      background: item.done? "white": "blanchedalmond"
    }
  }
}
