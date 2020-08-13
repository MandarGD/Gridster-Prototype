import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import {
  LayoutService,
  IComponent,
  IUserReports,
  getReportTitles,
  IReport,
} from '../services/layout.service';
import { components } from '../directives/layout-item.directive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  allReports: IUserReports;
  titles = [];

  constructor(public layoutService: LayoutService) {}

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  get compArray() {
    var compArray: any[] = [];
    for (var Ref in components) {
      compArray.push(Ref);
    }
    return compArray;
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  menuClick(data: string) {
    console.log(data);
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.layoutService.getReports().subscribe((c: IUserReports) => {
      this.allReports = c;

      this.titles = getReportTitles(
        this.allReports.MapItems,
        this.allReports.ChartItems
      );

      console.log('populated');

      //this.layout1 = this.layoutService.addAllItems(c);
    });

    // setTimeout(() => {
    //   this.titles.forEach((report: IReport) => {
    //     setTimeout(() => {
    //       this.layoutService.addItem('baseComponent');
    //       this.layoutService.setCurrents(
    //         report.ChartMapTitle,
    //         report.ChartMapHTMLString
    //       );
    //     }, 50);
    //   });
    //   console.log(this.titles);
    // }, 50);

    /*if (this.allReports) {
      this.titles = getReportTitles(
        this.allReports.MapItems,
        this.allReports.ChartItems
      );

      console.log(this.titles);
    }*/
  }
}
