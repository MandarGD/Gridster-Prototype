import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component implements OnInit {
  public name: string = 'example3';
  constructor() {}

  getName(): string {
    return name;
  }

  ngOnInit(): void {}
}
