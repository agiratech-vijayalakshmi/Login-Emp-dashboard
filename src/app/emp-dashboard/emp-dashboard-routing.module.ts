import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { EmpDashboardComponent } from './emp-dashboard.component';
import { NoAuthGuard } from '../no-auth.guard';


const routes: Routes = [{ path: '', component: EmpDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDashboardRoutingModule { }
