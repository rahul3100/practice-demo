import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public getdata = ""
  ngOnInit(): void {
    this.parent()
    console.log(this.parent());

  }
  title = 'practice';

  hello: any = "hello world"
  parent() {
    let a = "1111"
    return a
  }
  myfun() {
    return "hello world"
  }

  
}
