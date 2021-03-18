import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'app-firebase-notification',
  templateUrl: './firebase-notification.component.html',
  styleUrls: ['./firebase-notification.component.css']
})
export class FirebaseNotificationComponent implements OnInit {

  message;
  constructor(private messagingService: MessagingService) { }
ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
 }
}
