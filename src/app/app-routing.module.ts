import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/login/login.component';
import { LoginGuard } from './login.guard';



const routes: Routes = [{ path: 'emp-dashboard', 
loadChildren: () => import('./Modules/emp-dashboard/emp-dashboard.module').then(m => m.EmpDashboardModule), canActivate:[LoginGuard]},
{ path: '', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },
{ path: 'employee-table', loadChildren: () => import('./employeetable/employeetable.module').then(m => m.EmployeetableModule) },
{ path: 'employee-profile', loadChildren: () => import('./employee-profile/employee-profile.module').then(m => m.EmployeeProfileModule) },
{ path: 'employee-profile/:id', loadChildren: () => import('./employee-profile/employee-profile.module').then(m => m.EmployeeProfileModule) },
{ path: 'edit-profile', loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
