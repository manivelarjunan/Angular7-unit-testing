import { Component, OnInit } from '@angular/core';
import { UserAsyncService } from './user-async.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-async',
  templateUrl: './user-async.component.html',
  styleUrls: ['./user-async.component.scss'],
  providers: [UserAsyncService]
})
export class UserAsyncComponent implements OnInit {
  isLoggedIn = false;
  user: { name: string };
  userDetail;
  systemError = false;
  systemErrorMessage = '';
  constructor(private userAsyncService: UserAsyncService) {}

  ngOnInit() {
    this.userAsyncService = this.userAsyncService.getUserDetails().subscribe(
      (respone: string) => {
        this.userDetail = respone;
        this.isLoggedIn = true;
      },
      (error: string) => {
        this.systemError = true;
        this.systemErrorMessage = error;
      }
    );
  }
}
