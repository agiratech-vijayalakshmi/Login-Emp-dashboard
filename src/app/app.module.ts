import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmpDashboardModule } from './Modules/emp-dashboard/emp-dashboard.module';
import { EmpDashboardComponent } from './Modules/emp-dashboard/emp-dashboard.component';
import { EmpDashboardRoutingModule } from './Modules/emp-dashboard/emp-dashboard-routing.module';
import { LoginComponent } from './Modules/login/login.component';
import {LoginService } from './login.service';
import { LoginGuard} from './login.guard';
import { SharedModule } from './shared/shared.module';
import { EmployeeProfileService } from './employee-profile.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';











@NgModule({
  declarations: [
    AppComponent,
  

    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [EmployeeProfileService],
  bootstrap: [AppComponent],
  
  
  
})
export class AppModule { }
