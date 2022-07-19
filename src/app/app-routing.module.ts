import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';



const routes: Routes = [{ path: 'emp-dashboard', 
loadChildren: () => import('./emp-dashboard/emp-dashboard.module').then(m => m.EmpDashboardModule), canActivate:[LoginGuard]},
{path: '', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
