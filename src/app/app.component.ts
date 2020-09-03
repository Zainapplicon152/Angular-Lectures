import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  name = 'zain';
  currentVal = '';
  disableButton = true;
  show = 'yes';
  color = 'green';
  users = [
    {
      name: 'zain',
      age: 22,
      email: 'zain@gmail.com',
    },
    {
      name: 'zain2',
      age: 22,
      email: 'zain@gmail.com',
    },
    {
      name: 'zain3',
      age: 22,
      email: 'zain@gmail.com',
    },
    {
      name: 'zain4',
      age: 22,
      email: 'zain@gmail.com',
    },
  ];

  obj = { name: 'zain', age: 22 };
  arr = ['zain', '22', 'love'];

  // tslint:disable-next-line:typedef
  getName() {
    return this.name;
  }

  // tslint:disable-next-line:typedef
  getMyName() {
    alert('zain');
  }

  // tslint:disable-next-line:typedef
  myEvent(evt) {
    console.warn(evt);
  }

  getVal(val) {
    console.warn(val);
    this.currentVal = val;
  }

  enablebutton() {
    this.disableButton = false;
  }

  getUserform(value) {
    console.warn(value);
  }
}
