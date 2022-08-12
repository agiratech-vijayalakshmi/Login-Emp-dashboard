import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDashboardRoutingModule } from './emp-dashboard-routing.module';
import { EmpDashboardComponent } from './emp-dashboard.component';
import { ChartComponent } from '../chart/chart.component';
// import {FormControl} from '@angular/forms';
import { EmployeeCarouselComponent } from 'src/app/employee-carousel/employee-carousel.component';
import { MatCarousel, MatCarouselComponent , MatCarouselSlide, MatCarouselSlideComponent} from 'ng-mat-carousel';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmpDashboardComponent,
    ChartComponent,
    EmployeeCarouselComponent
  ],
  imports: [
    CommonModule,
    EmpDashboardRoutingModule,

    SharedModule
  ]
})
export class EmpDashboardModule { }
