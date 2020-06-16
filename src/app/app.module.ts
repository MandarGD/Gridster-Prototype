import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { GridsterModule } from 'angular-gridster2';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
  ],
  imports: [BrowserModule, GridsterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Example1Component, Example2Component],
})
export class AppModule {}
