import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'weatherapp';

  weatherDesc="";
  city="";
  humide="";
  tmpmin:number;
  tmpmax:number;
  tmp:number;
  constructor(private apiService:ApiService){}

  btnclick(text){
    this.city=text;
    AppComponent.prototype.city=text;
   
    this.apiService.getData().subscribe((data:any)=>{
      this.weatherDesc=data.weather[0].description;
      this.humide=data.main.humidity;
      this.tmp=Math.round(data.main.temp-273.15);
      this.tmpmin=data.main.temp_min-273.15;
      this.tmpmax=data.main.temp_max-273.15;
      console.log(data);
     
     })

     
   
  }
}
