import { Component, OnInit } from '@angular/core';
import { BarDataService } from './bar-data.service';
import { Bar } from './bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BarDataService]
})
export class AppComponent implements OnInit {
  bars: Bar[] = [];
  
  constructor(private barDataService: BarDataService) {}
  
  onAddBar(bar) {
    this.barDataService.addBar(bar);
  }
  
  onRemoveBar(bar) {
    this.barDataService.deleteBarById(bar.id);
  }
  
  get allBars() {
    return this.barDataService.getAllBars();
  }
  
  public ngOnInit() {
    this.barDataService
      .getAllBars()
      .subscribe(
        (bars) => {
          this.bars = bars;
          console.log("bars:", this.bars);
        })
  }
  
}

// https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/
