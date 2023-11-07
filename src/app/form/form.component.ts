import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user:any={}
  getdata(data:any){
    console.log(data);
    this.user=data
  }
}
