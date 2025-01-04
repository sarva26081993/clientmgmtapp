import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeetingschedulerComponent } from './meetingscheduler/meetingscheduler.component';
import { RegisterComponent } from './register/register.component';
import { ClientdisplayComponent } from './clientdisplay/clientdisplay.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    WelcomeComponent,
    MeetingschedulerComponent,
    RegisterComponent,
    ClientdisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
