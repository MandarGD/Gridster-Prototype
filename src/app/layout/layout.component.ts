import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent } from '../services/layout.service';
import { components } from '../directives/layout-item.directive';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
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

  ngOnInit(): void {}
}
