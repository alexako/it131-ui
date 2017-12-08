import { Component, OnInit } from '@angular/core';
import { BarDataService } from './bar-data.service';
import { Bar } from './bar';
import { IpApiService } from './ip-api.service';
import { ZomatoApiService } from './zomato-api.service';
import { Coords } from './coords';
import 'rxjs/add/operator/map';


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
  bars: any[] = [];
  zBars: any[] = [];
  coords: Coords;
  showLoader: Boolean;

  constructor(private barDataService: BarDataService,
              private ipApiService: IpApiService,
              private zomatoApiService: ZomatoApiService) { }
  
  onAddBar(bar) {
    this.barDataService.addBar(bar);
  }
  
  onRemoveBar(bar) {
    this.barDataService.deleteBarById(bar.id);
  }

  getBarsByKeyword(keyword) {
    return this.zomatoApiService.getBarsByKeyword(keyword);
  }

  getBarById(id) {
    return this.zomatoApiService.getBarById(id);
  }

  getZBars() {
    return this.zomatoApiService.getLocalBars(this.coords);
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
      this.showLoader = true;
      this.coords = new Coords({
            as: '', 
            city: 'Makati',
            country: 'Philippines',
            countryCode: '',
            isp: 'PLDT',
            lat: '14.5547',
            lon: '121.0244',
            org: '',
            query: '',
            region: '',
            regionName: '',
            status: '',
            timezone: '',
            zip: 1230
      })

      this.ipApiService.getCoordinates().subscribe(coords => {
        this.coords = coords;
        console.log("coords:", coords);
      });

      this.zomatoApiService
        .getLocalBars(this.coords)
        .subscribe(zBars => {
            this.zBars = zBars;
            console.log("zBars:", this.zBars);
        })


      this.barDataService
        .getAllBars()
        .subscribe(
            (bars) => {
              bars.map(bar => {
                this.bars.push(bar);
              });
              console.log("bars:", this.bars);
            })
      this.showLoader = false;
  }

  receiveUpdate($event) {
    this.zBars = $event
  }
}

