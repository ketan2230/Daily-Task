import { Component, OnInit , Input, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //output decorator
  @Output() public sendData = new EventEmitter();

  ngOnInit(): void {
    this.sendData.emit('Child Data');
  }

  //input Decorator
  @Input() parentData : string ;

  //Output Decorator

}
