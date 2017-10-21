import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) {}
  
  // Get all '/'
  public getAllData(): Observable<Bar[]> {
    return this.http
        .get(API_URL)
        .map(response => {
          const bars = response.json();
          return bars.map((bar) => new Bar(bar));
        })
        .catch(this.handleError);
  }

  // API: POST '/'
  public createBar(bar: Bar) {
    return this.http
        .post(API_URL, bar)
        .map(response => {
          return new Bar(response.json());
        })
        .catch(this.handleError);
  }

  // API: GET /:id
  public getBarById(barID: number): Observable<Bar> {
    return this.http
        .get(API_URL + barID)
        .map(response => {
          return new Bar(response.json());
        })
        .catch(this.handleError);
  }

  // API: PUT /:id
  public updateBar(bar: Bar) {
    return this.http
        .put(API_URL + bar.id, bar)
        .map(response => {
          return new Bar(response.json());
        })
        .catch(this.handleError);
  }

  // DELETE /:id - Admin only
  public deleteBarById(barID: number) {
    return this.http
        .delete(API_URL + barID)
        .map(response => null)
        .catch(this.handleError);
  }
  
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
