import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { GridsterModule } from 'angular-gridster2';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { Example3Component } from './components/example3/example3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { BaseItemComponent } from './components/base-item/base-item.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GridStackComponent } from './components/grid-stack/grid-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    Example3Component,
    BaseItemComponent,
    GridStackComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BaseItemComponent],
})
export class AppModule {}
