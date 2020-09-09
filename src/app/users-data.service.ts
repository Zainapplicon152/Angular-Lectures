import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getdata() {
    return {
      name: 'zain',
      age: 22
    };
  }

}
