import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { Chart } from 'chart.js';
import { EmpDashboardRoutingModule } from './emp-dashboard-routing.module';
import { EmpDashboardComponent } from './emp-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ChartComponent } from '../chart/chart.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    EmpDashboardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    EmpDashboardRoutingModule,FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    NgChartsModule
  ]
})
export class EmpDashboardModule { }
