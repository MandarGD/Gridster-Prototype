import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { LayoutService, IUserReports } from 'src/app/services/layout.service';

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',

  styleUrls: ['./base-item.component.scss'],
})
export class BaseItemComponent implements OnInit {
  title: string;
  data: SafeHtml;

  reports: IUserReports;

  constructor(
    public service: LayoutService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.title = this.service.currentReportTitle;

    /*this.service.getReports().subscribe((c: IUserReports) => {
      console.log(c);
      this.reports = c;
    });*/

    this.data = this.domSanitizer.bypassSecurityTrustHtml(
      '<html>' + this.service.currentReportContent + '</html>'
    );
    //this.data = this.service.currentReportContent;

    console.log(this.data);
  }
}
