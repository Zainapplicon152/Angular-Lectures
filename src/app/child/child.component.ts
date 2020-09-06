import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() hero; /*from parent component*/
  @Output() parentComponent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  childComponent() {
    const item = {name: 'zain', age: 22};
    this.parentComponent.emit(item);
  }
}
