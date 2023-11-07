import { Component, ElementRef, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  @Input() item = 0
  @Input() abc: any
  list: any = []
  aaa: any = "parent"

  ngOnInit(): void {
    console.log(this.abc);
  }

  addTask(task: any) {
    console.log(task);
    this.list.push({ id: this.list.length, name: task })
    console.log(this.list);
  }

  remove(id: any) {
    this.list.splice(id, 1)
    console.log(id);

  }

  @Output() public childElement = new EventEmitter();
  senddata() {
    this.childElement.emit("passing data compete")
  }
}
