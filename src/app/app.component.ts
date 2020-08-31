import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  name = 'zain';
  currentVal = '';
  disableButton = true;

  obj = {name: 'zain', age: 22};
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
}
