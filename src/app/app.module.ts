import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeetingschedulerComponent } from './meetingscheduler/meetingscheduler.component';
import { RegisterComponent } from './register/register.component';
import { ClientdisplayComponent } from './clientdisplay/clientdisplay.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DisplayclientComponent } from './displayclient/displayclient.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'scheduleMeeting', component: MeetingschedulerComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'displayClient', component: DisplayclientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    WelcomeComponent,
    MeetingschedulerComponent,
    RegisterComponent,
    ClientdisplayComponent,
    DisplayclientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
