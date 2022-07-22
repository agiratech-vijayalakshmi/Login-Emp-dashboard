import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/login/login.component';
import { LoginGuard } from './login.guard';



const routes: Routes = [{ path: 'emp-dashboard', 
loadChildren: () => import('./Modules/emp-dashboard/emp-dashboard.module').then(m => m.EmpDashboardModule), canActivate:[LoginGuard]},
{ path: '', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },
{ path: 'employee-table', loadChildren: () => import('./employeetable/employeetable.module').then(m => m.EmployeetableModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
