import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Coords } from './coords';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = "http://ip-api.com/json";

@Injectable()
export class IpApiService {

  constructor(private http: Http) { }

    public getCoordinates(): Observable<Coords> {
        return this.http
            .get(API_URL)
            .map(response => {
                return new Coords(response.json());
            })
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('IpApiService::handleError', error);
        return Observable.throw(error);
    }
}
