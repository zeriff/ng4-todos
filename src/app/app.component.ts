import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoList: {title: string, done: boolean}[] = [];

  onTodoCreated(value: string) {
    this.todoList.push({
      title: value,
      done: false
    });
  }
}
