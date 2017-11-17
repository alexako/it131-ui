import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Coords } from './coords';
import { Bar } from './bar';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_ROOT = "https://developers.zomato.com/api/v2.1/";

@Injectable()
export class ZomatoApiService {

  constructor(private http: Http) { }

  public getLocalBars(coords: Coords): Observable<Bar[]> {
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('user-key', 'bbf5811a30ba7c85e964fb7f0f499968');
      let url = '$(API_ROOT)/params';
      let params = new URLSearchParams();
      params.set('lat', coords.lat.toString());
      params.set('lon', coords.lon.toString());
      params.set('category', '3');
      return this.http
            .get(url, {headers: headers, params: params})
            .map(response => {
                const bars = response.json();
                return bars.map((bar) => new Bar(bar))
            })
            .catch(this.handleError);
  }

  public getBarById(id: number): Observable<Bar> {
      return this.http
            .get(API_ROOT + id)
            .map(response => {
                return new Bar(response.json());
            })
            .catch(this.handleError);
  }

  public getBarsByKeyword(keyword: string): Observable<Bar> {
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('user-key', 'bbf5811a30ba7c85e964fb7f0f499968');
      let url = '$(API_ROOT)/params';
      let params = new URLSearchParams();
      params.set('q', keyword);
      return this.http
      .get(url, {headers: headers, params: params})
             .map(response => {
                 const bars = response.json();
                 return bars.map((bar) => new Bar(bar))
             })
             .catch(this.handleError);
  }

  private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
  }
}
