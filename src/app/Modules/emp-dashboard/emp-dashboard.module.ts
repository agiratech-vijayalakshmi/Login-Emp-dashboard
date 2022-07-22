import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDashboardRoutingModule } from './emp-dashboard-routing.module';
import { EmpDashboardComponent } from './emp-dashboard.component';
import { ChartComponent } from '../chart/chart.component';
// import {FormControl} from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    EmpDashboardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    EmpDashboardRoutingModule,
    // FormControl,
    SharedModule
  ]
})
export class EmpDashboardModule { }
