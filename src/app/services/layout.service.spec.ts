import { TestBed } from '@angular/core/testing';

import { LayoutService, IUserReports } from './layout.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getReports should return observable', (done: DoneFn) => {
  //   service.getReports().subscribe((value) => {
  //     expect(value).toBe('observable value');
  //     done();g
  //   });
  // });

  it('addItem should add a grid item', (done: DoneFn) => {
    service.addItem('baseComponent');

    expect(service.layout.length).toBe(1);
    done();
  });

  it('deleteItem should delete from layout', (done: DoneFn) => {
    service.addItem('baseComponent');
    service.deleteItem(service.components[0].id);

    expect(service.layout.length).toBe(0);
    done();
  });
});
