import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component implements OnInit {
  public name: string = 'example3';
  //users: IUser[];
  constructor(private service: LayoutService) {}

  getName(): string {
    return name;
  }

  ngOnInit(): void {
    // this.service.getUsers().subscribe({
    //   next: (users) => (this.users = users),
    // });
    /*this.service.getUsers().subscribe((c: IUser[]) => {
      this.users = c;
    })*/
  }
}
