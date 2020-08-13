import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IComponent {
  id: string;
  componentRef: string;
}
/*
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}*/

export function getReportTitles(
  mapReports: IReport[],
  chartReports: IReport[]
) {
  let myArray = [];
  mapReports.forEach((report: IReport) => {
    myArray.push(report);
  });

  chartReports.forEach((report: IReport) => {
    myArray.push(report);
  });

  return myArray;
}

export interface IReport {
  Type: string;
  ChartMapTitle: string;
  ChartMapHTMLString: string;
}

export interface IUserReports {
  //Reports: IReport[];
  ChartItems: IReport[];
  MapItems: IReport[];
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  //private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private reportsApi = 'data1_new.txt';

  public options: GridsterConfig = {
    draggable: {
      enabled: true,
    },
    pushItems: true,

    resizable: {
      enabled: true,
    },
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,

    maxCols: 6,
    swap: true,
    maxRows: 6,
    gridType: 'fit',
    displayGrid: 'always',
  };

  public layout: GridsterItem[] = [];

  public components: IComponent[] = [];

  dropId: string;

  currentReportTitle: string;
  currentReportContent: string;

  constructor(private http: HttpClient) {}

  setDropId(dropId: string) {
    this.dropId = dropId;
  }

  getReports(): Observable<IUserReports> {
    return this.http.get<IUserReports>(this.reportsApi);
  }

  setCurrents(title: string, content: string) {
    this.currentReportTitle = title;
    this.currentReportContent = content;
    console.log(content);
  }

  // addAllItems(reportObject: IUserReports) {
  //   let combinedArray = getReportTitles(
  //     reportObject.ChartItems,
  //     reportObject.MapItems
  //   );

  //   let layoutTest: GridsterItem[] = [];

  //   combinedArray.forEach((report: IReport) => {
  //     //this.addItem('baseComponent');
  //     layoutTest.push({
  //       cols: 1,
  //       id: UUID.UUID(),
  //       rows: 2,
  //       x: 0,
  //       y: 0,
  //       hasContent: true
  //     });

  //     this.setDropId(layoutTest[layoutTest.length - 1].id);
  //     //this.dropItem(dragId);

  //     this.setCurrents(report.ChartMapTitle, report.ChartMapHTMLString);

  //     console.log(report.ChartMapTitle);
  //   });
  //   return layoutTest;
  // }

  dropItem(dragId: string): void {
    const { components } = this;

    const comp: IComponent = this.components.find((c) => c.id === this.dropId);

    const updateIdx: number = comp
      ? components.indexOf(comp)
      : components.length;

    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId,
    };

    this.components = Object.assign([], components, {
      [updateIdx]: componentItem,
    });

    console.log(dragId);
    console.log(this.dropId);
  }

  getComponentRef(id: string): string {
    const comp = this.components.find((c) => c.id === id);
    return comp ? comp.componentRef : null;
  }

  addItem(dragId: string): void {
    this.layout.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 2,
      x: 0,
      y: 0,
      hasContent: true,
    });

    this.setDropId(this.layout[this.layout.length - 1].id);
    this.dropItem(dragId);
  }

  deleteItem(id: string): void {
    const item = this.layout.find((d) => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find((c) => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }
}
