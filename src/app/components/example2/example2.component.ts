import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit {
  name: string = 'example2';
  //users: IUser[];
  constructor(private service: LayoutService) {}

  ngOnInit(): void {
    /*this.service.getUsers().subscribe({
      next: (users) => (this.users = users),
    });*/
  }
}
