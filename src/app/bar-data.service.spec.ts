import { TestBed, inject } from '@angular/core/testing';
import { Bar } from './bar';
import { BarDataService } from './bar-data.service';

describe('BarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarDataService]
    });
  });

  it('should be created', inject([BarDataService], (service: BarDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllBars()', () => {
    it('should return an empty array by default',
      inject([BarDataService], (service: BarDataService) => {
        expect(service.getAllBars()).toEqual([]);
      }));

      it('should return all bars',
          inject([BarDataService], (service: BarDataService) => {
              let bar1 = new Bar({name: 'Bar 1', rating: 3.5, description: 'Bar 1 Description'});
              let bar2 = new Bar({name: 'Bar 2', rating: 4.5, description: 'Bar 2 Description'});
              let bar3 = new Bar({name: 'Bar 3', rating: 5.0, description: 'Bar 3 Description'});

              service.addBar(bar1);
              service.addBar(bar2);
              service.addBar(bar3);

              expect(service.getAllBars()).toEqual([bar1, bar2, bar3]);
          }));
  });
});
