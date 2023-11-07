import { Component } from '@angular/core';
import { RestDataService } from '../service/rest-data.service'

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent {
  data: any;
  constructor(private restdata: RestDataService) {
    this.restdata.getdata().subscribe((item) => {
      this.data = item
      console.log(item);
    })
  }

  getdataForm(formdata: any) {
    console.log(formdata);
    this.restdata.savedata(formdata).subscribe((item)=>{
      console.log(item);
    })

  }
}