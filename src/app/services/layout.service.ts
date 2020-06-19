import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true,
    },
    pushItems: true,

    resizable: {
      enabled: true,
    },
    scrollSensitivity: 0,
    scrollSpeed: 0,
    maxCols: 3,
    swap: true,
    maxRows: 3,
    gridType: 'fit',
    displayGrid: 'always',
  };

  public layout: GridsterItem[] = [];

  public components: IComponent[] = [];

  dropId: string;

  constructor() {}

  setDropId(dropId: string) {
    this.dropId = dropId;
  }

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
      rows: 1,
      x: 0,
      y: 0,
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
