import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  isExist() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 6000);
      return true;
    });
  }
}
