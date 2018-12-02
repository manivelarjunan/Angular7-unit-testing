import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  user: { name: string };
  isUserLoggedIn = false;
  userDetail;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userDetail = this.userService.getUser();
    if (this.userDetail) {
      this.user = this.userDetail;
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}
