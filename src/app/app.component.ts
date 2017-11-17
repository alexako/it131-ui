import { Component, OnInit } from '@angular/core';
import { BarDataService } from './bar-data.service';
import { Bar } from './bar';
import { IpApiService } from './ip-api.service';
import { ZomatoApiService } from './zomato-api.service';
import { Coords } from './coords';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
      BarDataService, 
      IpApiService,
      ZomatoApiService
  ]
})
export class AppComponent implements OnInit {
  title: string = "NightOut";
  bars: Bar[] = [];
  coords: Coords;

  constructor(private barDataService: BarDataService,
              private ipApiService: IpApiService,
              private zomatoApiService: ZomatoApiService) {}
  
  onAddBar(bar) {
    this.barDataService.addBar(bar);
  }
  
  onRemoveBar(bar) {
    this.barDataService.deleteBarById(bar.id);
  }

  getBarsByKeyword(keyword) {
    console.log("in component:", keyword);
    return this.zomatoApiService.getBarsByKeyword(keyword);
  }

  getBarById(id) {
    return this.zomatoApiService.getBarById(id);
  }
  
  get allBars() {
    return this.barDataService.getAllBars();
  }

  get Coords() {
    return this.ipApiService.getCoordinates();
  }

  getStars(rating) {
    var val = parseFloat(rating);
    var size = val/5*100;
    return size + '%';
  }

  public ngOnInit() {
      this.ipApiService
        .getCoordinates()
        .subscribe(
            (coords) => {
                this.coords = coords;
                console.log("coords:", this.coords);
            })
      this.barDataService
        .getAllBars()
        .subscribe(
            (bars) => {
              this.bars = bars;
              console.log("bars:", this.bars);
            })
  }
  
}

