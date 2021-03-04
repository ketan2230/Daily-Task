import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //output decorator
  value="";
  sendData(value)
  {
    this.value=value;
  }

  //input decorator
  enterName = "Ketan";
  parentData = "";

  ngOnInit(): void {
  }

  //input decorator
  TransferData(){

    this.parentData=this.enterName;
    console.log(this.parentData);

  }

}
