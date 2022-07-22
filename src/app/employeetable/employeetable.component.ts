import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import {FormControl} from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { map, Observable } from 'rxjs';
import { startWith} from 'rxjs/operators';



export interface PeriodicElement {
  Id : number,	
  FirstName:string,	
  LastName:string,	
  Age: number,
  Email:string,
  Gender:string,	
  JobTitle:string,
  ContactNumber:number
}

const ELEMENT_DATA: PeriodicElement[] = [{
  "Id": 1,
  "FirstName": "Johannah",
  "LastName": "Kiffin",
  "Age":34,
  "Email": "jkiffin0@google.pl",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":8045632174,
}, {
  "Id": 2,
  "FirstName": "Eldin",
  "LastName": "Astbery",
  "Age":28,
  "Email": "eastbery1@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor",
  "ContactNumber":9045632176,
}, {
  "Id": 3,
  "FirstName": "Nahum",
  "LastName": "Mounce",
  "Age":25,
  "Email": "nmounce2@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II",
  "ContactNumber":9945632170,
}, {
  "Id": 4,
  "FirstName": "Gallard",
  "LastName": "Standell",
  "Age":29,
  "Email": "gstandell3@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II",
  "ContactNumber":7772563222,
}, {
  "Id": 5,
  "FirstName": "Koenraad",
  "LastName": "Domleo",
  "Age":26,
  "Email": "kdomleo4@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist",
  "ContactNumber":9922100879,
}, {
  "Id": 6,
  "FirstName": "Uriah",
  "LastName": "Turbat",
  "Age":28,
  "Email": "uturbat5@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II",
  "ContactNumber":9932100668,
}, {
  "Id": 7,
  "FirstName": "Waldemar",
  "LastName": "Fowley",
  "Age":26,
  "Email": "wfowley6@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator",
  "ContactNumber":8822100870,
}, {
  "Id": 8,
  "FirstName": "Rodolfo",
  "LastName": "Trenchard",
  "Age":30,
  "Email": "rtrenchard7@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator",
  "ContactNumber":8722100889,
}, {
  "Id": 9,
  "FirstName": "Konstance",
  "LastName": "Dudek",
  "Age":31,
  "Email": "kdudek8@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":7892100834,
}, {
  "Id": 10,
  "FirstName": "Monti",
  "LastName": "Perton",
  "Age":32,
  "Email": "mperton9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator",
  "ContactNumber":77089434455,
},
{
  "Id": 11,
  "FirstName": "Adam",
  "LastName": "Smith",
  "Age":34,
  "Email": "smithadam@google.pl",
  "Gender": "M",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":8045632174,
}, {
  "Id": 12,
  "FirstName": "James",
  "LastName": "Weiser",
  "Age":28,
  "Email": "jame@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor",
  "ContactNumber":9045632176,
}, {
  "Id": 13,
  "FirstName": "Joshaphine",
  "LastName": "Marrrier",
  "Age":25,
  "Email": "marrie@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II",
  "ContactNumber":9945632170,
}, {
  "Id": 14,
  "FirstName": "Art",
  "LastName": "Standell",
  "Age":29,
  "Email": "arts@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II",
  "ContactNumber":7772563222,
}, {
  "Id": 15,
  "FirstName": "Lenna",
  "LastName": "Amigon",
  "Age":26,
  "Email": "alenna@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist",
  "ContactNumber":9922100879,
}, {
  "Id": 16,
  "FirstName": "Donnete",
  "LastName": "Turbat",
  "Age":28,
  "Email": "turbatd@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II",
  "ContactNumber":9932100668,
}, {
  "Id": 17,
  "FirstName": "Simona  ",
  "LastName": "Ruta",
  "Age":26,
  "Email": "simona@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator",
  "ContactNumber":8822100870,
}, {
  "Id": 18,
  "FirstName": "Gris",
  "LastName": "Albrace",
  "Age":30,
  "Email": "girsa@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator",
  "ContactNumber":8722100889,
}, {
  "Id": 19,
  "FirstName": "Cammy",
  "LastName": "Nicka",
  "Age":31,
  "Email": "cnicka@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":7892100834,
}, {
  "Id": 20,
  "FirstName": "Matti",
  "LastName": "Floci",
  "Age":32,
  "Email": "mfloci9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator",
  "ContactNumber":77089434455
},
{
  "Id": 21,
  "FirstName": "Adam",
  "LastName": "Smith",
  "Age":34,
  "Email": "smithadam@google.pl",
  "Gender": "M",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":8045632174,
}, {
  "Id": 22,
  "FirstName": "James",
  "LastName": "Weiser",
  "Age":28,
  "Email": "jame@geocities.jp",
  "Gender": "M",
  "JobTitle": "Senior Editor",
  "ContactNumber":9045632176,
}, {
  "Id": 23,
  "FirstName": "Joshaphine",
  "LastName": "Marrrier",
  "Age":25,
  "Email": "marrie@vk.com",
  "Gender": "M",
  "JobTitle": "Programmer II",
  "ContactNumber":9945632170,
}, {
  "Id": 24,
  "FirstName": "Art",
  "LastName": "Standell",
  "Age":29,
  "Email": "arts@europa.eu",
  "Gender": "M",
  "JobTitle": "Account Representative II",
  "ContactNumber":7772563222,
}, {
  "Id": 25,
  "FirstName": "Lenna",
  "LastName": "Amigon",
  "Age":26,
  "Email": "alenna@cornell.edu",
  "Gender": "M",
  "JobTitle": "Quality Control Specialist",
  "ContactNumber":9922100879,
}, {
  "Id": 26,
  "FirstName": "Donnete",
  "LastName": "Turbat",
  "Age":28,
  "Email": "turbatd@aol.com",
  "Gender": "M",
  "JobTitle": "Accounting Assistant II",
  "ContactNumber":9932100668,
}, {
  "Id": 27,
  "FirstName": "Simona  ",
  "LastName": "Ruta",
  "Age":26,
  "Email": "simona@sun.com",
  "Gender": "M",
  "JobTitle": "Account Coordinator",
  "ContactNumber":8822100870,
}, {
  "Id": 28,
  "FirstName": "Gris",
  "LastName": "Albrace",
  "Age":30,
  "Email": "girsa@yandex.ru",
  "Gender": "M",
  "JobTitle": "Data Coordiator",
  "ContactNumber":8722100889,
}, {
  "Id": 29,
  "FirstName": "Cammy",
  "LastName": "Nicka",
  "Age":31,
  "Email": "cnicka@techcrunch.com",
  "Gender": "F",
  "JobTitle": "Administrative Assistant I",
  "ContactNumber":7892100834,
}, {
  "Id": 30,
  "FirstName": "Matti",
  "LastName": "Floci",
  "Age":32,
  "Email": "mfloci9@youtube.com",
  "Gender": "M",
  "JobTitle": "Operator",
  "ContactNumber":77089434455
}
];

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.scss']
})
export class EmployeetableComponent implements OnInit {
  displayedColumns = ['select', 'Id', 'FirstName', 'LastName', 'Age', 'Email', 'Gender', 'JobTitle', 'ContactNumber'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  Gender = new FormControl('');
  myControl = new FormControl('');
  
  options: string[] = ['Account Coordinator', 'Data Coordiator', 'Operator', 'Administrative Assistant I', 'Quality Control Specialist','Account Representative II','Senior Editor','Programmer II'];

  filteredOptions: Observable<string[]> | undefined;
  g_options: string[] = ['Male','Female'];
  filteredGenderOptions: Observable<string[]> | undefined;  
  constructor() {
    
   }
  @ViewChild(MatPaginator, {static:true})  paginator!:MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;
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
  // ngAfterviewInit(){
  //     this.dataSource.paginator = this.paginator;
  //     // this.dataSource.sort = this.sort;
  // }

}
