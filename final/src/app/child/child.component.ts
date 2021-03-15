import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //output decorator
  @Output() public sendData = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendData.emit('Child Data');
  }

  //input Decorator
  @Input() parentData : string ;

  //Output Decorator
  

}
