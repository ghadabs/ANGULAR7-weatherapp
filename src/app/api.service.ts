import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AppComponent} from   './app.component'
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  city="";
  constructor(private http:HttpClient) { }

  getData(){
    this.city=AppComponent.prototype.city;
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=4c66a1faaabec5f907bd271300a1a50a");
    console.log(this.city);
  }
 
}  
