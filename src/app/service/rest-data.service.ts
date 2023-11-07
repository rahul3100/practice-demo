import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  url="http://localhost:3000/user"

  constructor(private client:HttpClient) { }

  getdata(){
    return this.client.get(this.url)
  }

  savedata(data:any){
    return this.client.post(this.url,data)
  }

}
