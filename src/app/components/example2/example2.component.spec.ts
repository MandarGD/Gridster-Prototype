import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Component } from './example2.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Example2Component', () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Example2Component],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
