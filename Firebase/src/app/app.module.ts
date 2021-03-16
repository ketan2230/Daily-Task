import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { AngularFireModule } from '@angular/fire';  
import { AngularFireDatabaseModule } from '@angular/fire/database';  
import { AngularFirestoreModule } from '@angular/fire/firestore';  
import { RealTimeDatabaseComponent } from './real-time-database/real-time-database.component';  
import { CloudFirestoreComponent } from './cloud-firestore/cloud-firestore.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'; 
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RealTimeDatabaseComponent,  
    CloudFirestoreComponent, DashboardComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,  
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFireDatabaseModule,  
    AngularFirestoreModule  ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFireModule, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
