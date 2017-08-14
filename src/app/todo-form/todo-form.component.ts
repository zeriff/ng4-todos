import { Component, OnInit, EventEmitter, ViewChild, ElementRef,Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() todocreated:EventEmitter<{title: string}> = new EventEmitter();
  @ViewChild("todo") todo: ElementRef;

  constructor() { }
  ngOnInit() {
  }

  onAddButtonClick(){
   let value = this.todo.nativeElement.value;
    if(value){
      this.todocreated.emit(value)
    }
  }
}
