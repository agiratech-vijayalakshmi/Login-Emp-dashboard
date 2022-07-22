import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeetableRoutingModule } from './employeetable-routing.module';
import { EmployeetableComponent } from './employeetable.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeetableComponent
  ],
  imports: [
    CommonModule,
    EmployeetableRoutingModule,
    SharedModule
  ]
})
export class EmployeetableModule { }
