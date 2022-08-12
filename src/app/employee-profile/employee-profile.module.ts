import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { EmployeeProfileComponent } from './employee-profile.component';
import { SharedModule } from '../shared/shared.module';
import { AgePipe } from '../age.pipe';

@NgModule({
  declarations: [
    EmployeeProfileComponent,
    AgePipe
 

  ],
  imports: [
    CommonModule,
    EmployeeProfileRoutingModule,
    SharedModule,
  

  ]
})
export class EmployeeProfileModule { }
