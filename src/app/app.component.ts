import {Component} from '@angular/core';
import {UsersDataService} from './users-data.service';
import {PostDataService} from './post-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 3rem;
      color: #d3d3d3;
    }

    .full {
      color: red;
    }

    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
  `],
})
export class AppComponent {
  title = 'Angular';
  name = 'zain';
  currentVal = '';
  disableButton = true;
  show = 'yes';
  color = 'green';
  err = true;
  currentRate = 3.14;
  myname = '';
  posts = [];
  data = {
    name: 'zain',
    age: 22
  };
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

  obj = {name: 'zain', age: 22};
  arr = ['zain', '22', 'love'];

  constructor(private user: UsersDataService, private post: PostDataService) {
    console.warn(this.user.getdata());
    const datas = this.user.getdata();
    this.myname = datas.name;

    this.post.getPostData().subscribe(data => {
      console.warn(data);
      this.posts = data;
    });
  }

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

  changeColor() {
    this.color = 'red';
  }

  parentComponent(data) {
    console.warn(data);
  }
}
