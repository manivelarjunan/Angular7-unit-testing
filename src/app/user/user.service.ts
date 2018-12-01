import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  user = {
    name: 'Mannie'
  };

  getUser() {
    return this.user;
  }
}
