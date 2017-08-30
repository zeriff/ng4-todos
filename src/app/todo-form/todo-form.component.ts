import { 
  Component, 
  OnInit, 
  EventEmitter, 
  ViewChild, 
  ElementRef,
  Output,
  Renderer2 
} from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() todocreated:EventEmitter<{title: string}> = new EventEmitter();
  @ViewChild("todo") todo: ElementRef;

  constructor(private todoService: TodoService, private renderer: Renderer2) { }
  ngOnInit() {
  }

  onAddButtonClick(){
   let value = this.todo.nativeElement.value;
    if(value){
        this.todoService.createTodo(value);
    }
    this.todo.nativeElement.value = "";
    this.todo.nativeElement.focus();
  }
}
