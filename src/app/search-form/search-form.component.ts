import { Component, Output, EventEmitter } from '@angular/core';
import { Search } from './search';
import { ZomatoApiService } from '../zomato-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [ ZomatoApiService ]
})
export class SearchFormComponent {

  search = new Search();
  submitted = false;
  result: any;

  constructor(private zomatoApiService: ZomatoApiService) {}

  getBarsByKeyword(keyword) {
      this.zomatoApiService.getBarsByKeyword(keyword)
          .subscribe(bars => {
              this.result = bars;
              console.log("result:", this.result);
              this.update();
          })
  }

  @Output() updateEvent = new EventEmitter<any[]>();

  update() {
    this.updateEvent.emit(this.result)
  }


  onSubmit() { this.submitted = true; }

}
