import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarDataService } from './bar-data.service';
import { ApiService } from './api.service';
import { IpApiService } from './ip-api.service';
import { ZomatoApiService } from './zomato-api.service';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BarDataService, ApiService, IpApiService, ZomatoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
