import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Bar } from './bar';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BarDataService {

  bars: Bar[] = [];

  constructor(private api: ApiService) { }

    addBar(bar: Bar): Observable<Bar> {
        this.bars.push(bar);
        return this.api.addBar(bar);
    }

    deleteBarById(id: number): Observable<Bar> {
        this.bars = this.bars
            .filter(bar => bar.id !== id);
        return this.api.deleteBarById(id);
    }

    getAllBars(): Observable<Bar[]> {
        return this.api.getAllBars();
    }

    getBarById(id: number): Observable<Bar> {
        return this.api.getBarById(id);
    }

}
