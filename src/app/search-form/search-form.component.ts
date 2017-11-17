import { Component } from '@angular/core';
import { Search } from './search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  search = new Search();
  submitted = false;

  onSubmit() { this.submitted = true; }

}
