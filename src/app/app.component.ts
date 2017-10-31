import { Component, OnInit } from '@angular/core';
import { BarDataService } from './bar-data.service';
import { Bar } from './bar';
import { IpApiService } from './ip-api.service';
import { Coords } from './coords';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BarDataService, IpApiService]
})
export class AppComponent implements OnInit {
  bars: Bar[] = [];
  coords: Coords;
  
  constructor(private barDataService: BarDataService, private ipApiService: IpApiService) {}
  
  onAddBar(bar) {
    this.barDataService.addBar(bar);
  }
  
  onRemoveBar(bar) {
    this.barDataService.deleteBarById(bar.id);
  }
  
  get allBars() {
    return this.barDataService.getAllBars();
  }

  get Coords() {
    return this.ipApiService.getCoordinates();
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

