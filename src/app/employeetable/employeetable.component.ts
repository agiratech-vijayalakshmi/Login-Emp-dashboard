import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { map, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { EmployeeProfileService } from '../employee-profile.service';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

export interface PeriodicElement {

  Id: number,
  FirstName: string,
  LastName: string,
  Email: string,
  Gender: string,
  DOB: any,
  JobTitle: string,
  ContactNumber: number,
  YOExp: number,
  ProjectWork: string,
  Rating: number,
  Image: string,
  isEdit: boolean
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss']
})

export class EmployeetableComponent implements OnInit {
  isChecked:boolean =false;
  itemData: any;
  empSource: any;
  items: any;
  selectedValue: string | undefined;
  displayedColumns = ['select', 'Id', 'FirstName', 'DOB', 'Email', 'Gender', 'JobTitle', 'ContactNumber'];
  displayedColumns_two = ['r2-select', 'r2-Id', 'r2-FirstName', 'r2-DOB', 'r2-Email', 'r2-Gender', 'r2-JobTitle', 'r2-ContactNumber'];
  @Output()
  change: EventEmitter<MatCheckboxChange> | undefined 
  constructor(private empservice: EmployeeProfileService, private router: Router) {

    // this.items = localStorage.setItem('employee_Data',JSON.stringify(this.empservice.ELEMENT_DATA));
  }

  dataSource = new MatTableDataSource<PeriodicElement>(JSON.parse(localStorage.getItem('employee_Data')!));
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    // this.isAllSelected() ?
    //   this.selection.clear() :
    //   this.dataSource.data.forEach(row => this.selection.select(row));
    if(this.isChecked){
      this.isChecked=false;
      this.displayedColumns[1] = 'Id';
      this.displayedColumns[2] = 'FirstName';
      this.displayedColumns_two[1] = 'r2-Id';
      this.displayedColumns_two[2] = 'r2-FirstName';
    }
    else{
      this.isChecked=true;
      this.displayedColumns[1]='FirstName';
      this.displayedColumns[2]='Id';
      this.displayedColumns_two[1]='r2-FirstName';
      this.displayedColumns_two[2]='r2-Id';
    }
    console.log('master toggle');
  }
  Gender = new FormControl('');
  myControl = new FormControl('');

  options: string[] = ['Account Coordinator', 'Data Coordiator', 'Operator', 'Administrative Assistant I', 'Quality Control Specialist', 'Account Representative II', 'Senior Editor', 'Programmer II'];

  filterOptions: Observable<string[]> | undefined;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  // @ViewChild(checkbox, {static: false}) checkbox:any;
  // @ViewChild(checkboxData) checkboxData:any;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(option => this.filterDep(option || '')),
    );

    this.getItem();
    this.onSave();
    // this.showOptions():void;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 filterDep(value: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase())===0);
  }

   getItem() {
     this.items = JSON.parse(localStorage.getItem('employee_Data')!);
   }
  onEdit(item: any) {
    item.isEdit = true;
  }
  onSave() {

    const updatedItem = this.dataSource.data;
    localStorage.setItem('employee_Data', JSON.stringify(updatedItem));
    this.close(); 
  }
  close() {
    this.items.isEdit = false;
  }
  back(){
    this.router.navigate(['\emp-dashboard'])
  }

}





