import { Component } from '@angular/core';
import { ApiService } from 'api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'NightOut';
  
  constructor(private apiService: ApiService) {}
  
  onAddBar(bar) {
    this.apiService.createBar(bar);
  }
  
  onRemoveBar(bar) {
    this.apiService.deleteBarById(bar.id);
  }
  
  get bars() {
    return this.apiService.getAllData();
  }
  
  public ngOnInit() {
    this.apiService
      .getAllData()
      .subscribe(
        (bars) => {
          this.bars = bars;
        })
  }
  
}

// https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/
