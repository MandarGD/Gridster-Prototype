import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { LayoutService, IUserReports } from 'src/app/services/layout.service';
import ExportingModule from 'highcharts/modules/exporting';
import SunsetTheme from 'highcharts/themes/sunset.src.js';
import * as Highcharts from 'highcharts';

// The modules will work for all charts.
ExportingModule(Highcharts);
SunsetTheme(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato',
    },
  },
  legend: {
    enabled: false,
  },
});

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',

  styleUrls: ['./base-item.component.scss'],
})
export class BaseItemComponent implements OnInit, AfterViewInit {
  title: string;
  data: SafeHtml;
  @ViewChild('htmlContainer') container;

  reports: IUserReports;

  constructor(
    public service: LayoutService,
    private domSanitizer: DomSanitizer
  ) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.title = this.service.currentReportTitle;

    /*this.service.getReports().subscribe((c: IUserReports) => {
      console.log(c);
      this.reports = c;
    });*/

    setTimeout(() => {
      //wait for DOM rendering
      let scripts = this.container.nativeElement.getElementsByTagName('script');
      for (let script of scripts) {
        eval(script.text);
      }
    });

    this.data = this.domSanitizer.bypassSecurityTrustHtml(
      '<html>' + this.service.currentReportContent + '</html>'
    );
    //this.data = this.service.currentReportContent;

    console.log(this.data);
  }
}
