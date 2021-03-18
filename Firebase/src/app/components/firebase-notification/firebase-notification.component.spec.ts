import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseNotificationComponent } from './firebase-notification.component';

describe('FirebaseNotificationComponent', () => {
  let component: FirebaseNotificationComponent;
  let fixture: ComponentFixture<FirebaseNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
