import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { map, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { EmployeeProfileService } from '../employee-profile.service';



export interface PeriodicElement {
  Id: number,
  FirstName: string,
  LastName: string,
  Age: number,
  Email: string,
  Gender: string,
  DOB: any,
  JobTitle: string,
  ContactNumber: number,
  YOExp: number,
  ProjectWork: string,
  Rating: number
}



@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss']
})
export class EmployeetableComponent implements OnInit {
  displayedColumns = ['select', 'Id', 'FirstName', 'LastName', 'Age', 'Email', 'Gender', 'JobTitle', 'ContactNumber'];
  displayedColumns_two = ['r2-select', 'r2-Id', 'r2-FirstName', 'r2-LastName', 'r2-Age', 'r2-Email', 'r2-Gender', 'r2-JobTitle', 'r2-ContactNumber'];
  constructor(private empservice: EmployeeProfileService) {
    console.log(this.empservice.ELEMENT_DATA);
  }
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(this.empservice.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  Gender = new FormControl('');
  myControl = new FormControl('');

  options: string[] = ['Account Coordinator', 'Data Coordiator', 'Operator', 'Administrative Assistant I', 'Quality Control Specialist', 'Account Representative II', 'Senior Editor', 'Programmer II'];

  filteredOptions: Observable<string[]> | undefined;
  g_options: string[] = ['Male', 'Female'];
  filteredGenderOptions: Observable<string[]> | undefined;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredGenderOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.g_filter(value || '')),
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private g_filter(value: string): string[] {
    const filterValue_gender = value.toLowerCase();

    return this.g_options.filter(option => option.toLowerCase().includes(filterValue_gender));
  }

}
