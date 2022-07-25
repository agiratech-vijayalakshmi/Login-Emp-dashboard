import {  Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';



import { Chart } from 'chart.js';


@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  


// menuItems = ['dashboard', ’sales', 'orders', 'customers', 'products'];
  constructor(private route: Router) {}
 logout(){
localStorage.removeItem('currentuser');
this.route.navigate([''])
 }
  
  ngOnInit(): void {}
}
