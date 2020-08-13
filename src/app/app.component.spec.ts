import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { BaseItemComponent } from './components/base-item/base-item.component';
import { GridStackComponent } from './components/grid-stack/grid-stack.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dashboard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dashboard');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'dashboard app is running!'
    );
  });*/
});
