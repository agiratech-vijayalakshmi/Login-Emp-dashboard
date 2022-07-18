import {  Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import {MatCardModule} from '@angular/material/card';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {
  


// menuItems = ['dashboard', ’sales', 'orders', 'customers', 'products'];
  constructor() {}
 
  
  ngOnInit(): void {}
}
