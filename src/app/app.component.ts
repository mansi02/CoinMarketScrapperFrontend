import { Component , OnInit } from '@angular/core';
import {ScrapperServiceService } from 'src/app/services/scrapper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'CoinScrapper';
  constructor(private scrapperService: ScrapperServiceService) {}

  scrapper_data : any[] = [];  
  /*------------------------------------------
  --------------------------------------------
  Ng On Init
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
    this.callMethod();
    setInterval(() => {
      this.callMethod(); 
    }, 50000);
  }
  
  callMethod(){
    this.scrapperService.list().subscribe((res: any[]) => {
      this.scrapper_data = res;
      console.log(res);
    });
    // console.log('Call Function Every Five Seconds.', new Date());
  }
  
}