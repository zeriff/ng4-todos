import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: {title: string, done: boolean}[]= [];

  constructor() { }

  ngOnInit() {
  }
  onToggle(item: {title: string, done: boolean}) {
    item.done = !item.done;
  } 
  onDelete(index: number){
   this.todoList.splice(index, 1);
  }
  getRowStyle(item: {title: string, done: boolean}) {
    return {
      background: item.done? "white": "blanchedalmond"
    }
  }
}
