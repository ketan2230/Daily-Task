import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PWA';
  private readonly publicKey = 'BOAxSQeKdnQKhEpuqX5Ec4jYX-JPHhSaC_wUQp1YKt9ScTvcgAitzwC1dQbdVNSprs64KVzCmgJcEoiOKsi884Y';

  constructor(
    private swUpdate: SwUpdate,
    private appRef: ApplicationRef,
    private swPush: SwPush
    ){
  }
  ngOnInit(){
    this.updateClient();
    this.pushSubscription();
    this.swPush.messages.subscribe((message) => console.log(message));

    this.swPush.notificationClicks.subscribe(
    ({action, notification}) =>{
      window.open(notification.data.url);
    });
  }
    // SwUpdate service
    updateClient() {
      // isEnable property
      if(!this.swUpdate.isEnabled) {
        console.log('Not Enabled !');
        return;
      }
  
      // available property
      this.swUpdate.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
  
        // activateUpdate method
        if(confirm('Update avilable for the app, Please confirm')) {
          this.swUpdate.activateUpdate().then(() => location.reload());
        }
  
      });
  
      // activated property
      this.swUpdate.activated.subscribe(event => {
        console.log('previous version is', event.previous);
        console.log('activated version is', event.current);
      });
    }
    // checkForUpdate method
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if(isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);

        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => console.log('checked'));
        });
      }
    });
  }

  pushSubscription()
  {
      if(!this.swPush.isEnabled){
        console.log('Notification is not enabled');
        return;
      }
      this.swPush.requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((sub) => console.log(JSON.stringify(sub)))
      .catch((err) => console.log(err));

  }


  hey        
}
