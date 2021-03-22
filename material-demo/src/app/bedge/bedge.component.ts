import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedge',
  templateUrl: './bedge.component.html',
  styleUrls: ['./bedge.component.css']
})
export class BedgeComponent{

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;  }

}
