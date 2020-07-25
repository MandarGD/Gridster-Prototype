import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  name: string = 'example1';
  //users: IUser[];
  constructor(private service: LayoutService) {}

  ngOnInit(): void {
    /*this.service.getUsers().subscribe({
      next: (users) => (this.users = users),
    });*/
  }
}
