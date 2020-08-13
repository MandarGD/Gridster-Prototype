import { LayoutItemDirective } from './layout-item.directive';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TestBed } from '@angular/core/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [ViewContainerRef, ComponentFactoryResolver],
  });
});

describe('LayoutItemDirective', () => {
  it('should create an instance', () => {
    let compRef = TestBed.inject(ViewContainerRef);
    let factory = TestBed.inject(ComponentFactoryResolver);
    const directive = new LayoutItemDirective(compRef, factory);
    expect(directive).toBeTruthy();
  });
});
