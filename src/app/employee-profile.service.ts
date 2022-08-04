import { Injectable, OnInit } from '@angular/core';
import { PeriodicElement } from './employeetable/employeetable.component';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService implements OnInit{
 ELEMENT_DATA: PeriodicElement[] = [{
    Id: 1,
    FirstName: "Joha",
    LastName: "Kiffin",
    Email: "jkiffin0@google.pl",
    Gender: "Female",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 8045632174,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 2,
    FirstName: "Eldin",
    LastName: "Astbery",
    Email: "eastbery1@geocities.jp",
    Gender: "Male",
    JobTitle: "Senior Editor",
    ContactNumber: 9045632176,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "8/03/1994",
    Image:"assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 3,
    FirstName: "Nahum",
    LastName: "Mounce",

    Email: "nmounce2@vk.com",
    Gender: "Male",
    JobTitle: "Programmer II",
    ContactNumber: 9945632170,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 3.5,
    DOB: "10/04/1992",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 4,
    FirstName: "Gallard",
    LastName: "Standell",

    Email: "gstandell3@europa.eu",
    Gender: "Male",
    JobTitle: "Account Representative II",
    ContactNumber: 7772563222,
    YOExp: 7,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1998",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 5,
    FirstName: "Koenraad",
    LastName: "Domleo",
  
    Email: "kdomleo4@cornell.edu",
    Gender: "Male",
    JobTitle: "Quality Control Specialist",
    ContactNumber: 9922100879,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1996",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 6,
    FirstName: "Uriah",
    LastName: "Turbat",
  
    Email: "uturbat5@aol.com",
    Gender: "Male",
    JobTitle: "Accounting Assistant II",
    ContactNumber: 9932100668,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/2000",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 7,
    FirstName: "Waldemar",
    LastName: "Fowley",
    
    Email: "wfowley6@sun.com",
    Gender: "Male",
    JobTitle: "Account Coordinator",
    ContactNumber: 8822100870,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/2001",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 8,
    FirstName: "Rodolfo",
    LastName: "Trenchard",

    Email: "rtrenchard7@yandex.ru",
    Gender: "Male",
    JobTitle: "Data Coordiator",
    ContactNumber: 8722100889,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 9,
    FirstName: "Konstance",
    LastName: "Dudek",
 
    Email: "kdudek8@techcrunch.com",
    Gender: "Female",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 7892100834,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1997",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 10,
    FirstName: "Monti",
    LastName: "Perton",
  
    Email: "mperton9@youtube.com",
    Gender: "Male",
    JobTitle: "Operator",
    ContactNumber: 77089434455,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1998",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  },
  {
    Id: 11,
    FirstName: "Adam",
    LastName: "Smith",
    
    Email: "smithadam@google.pl",
    Gender: "Male",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 8045632174,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1999",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 12,
    FirstName: "James",
    LastName: "Weiser",
 
    Email: "jame@geocities.jp",
    Gender: "Male",
    JobTitle: "Senior Editor",
    ContactNumber: 9045632176,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1999",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 13,
    FirstName: "Joshaphine",
    LastName: "Marrrier",
    
    Email: "marrie@vk.com",
    Gender: "Male",
    JobTitle: "Programmer II",
    ContactNumber: 9945632170,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1998",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 14,
    FirstName: "Art",
    LastName: "Standell",
 
    Email: "arts@europa.eu",
    Gender: "Male",
    JobTitle: "Account Representative II",
    ContactNumber: 7772563222,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1997",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 15,
    FirstName: "Lenna",
    LastName: "Amigon",
 
    Email: "alenna@cornell.edu",
    Gender: "Male",
    JobTitle: "Quality Control Specialist",
    ContactNumber: 9922100879,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1996",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 16,
    FirstName: "Donnete",
    LastName: "Turbat",
   
    Email: "turbatd@aol.com",
    Gender: "Male",
    JobTitle: "Accounting Assistant II",
    ContactNumber: 9932100668,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 17,
    FirstName: "Simona  ",
    LastName: "Ruta",
  
    Email: "simona@sun.com",
    Gender: "Male",
    JobTitle: "Account Coordinator",
    ContactNumber: 8822100870,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 18,
    FirstName: "Gris",
    LastName: "Albrace",
    Email: "girsa@yandex.ru",
    Gender: "Male",
    JobTitle: "Data Coordiator",
    ContactNumber: 8722100889,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 19,
    FirstName: "Cammy",
    LastName: "Nicka",
  
    Email: "cnicka@techcrunch.com",
    Gender: "Female",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 7892100834,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 20,
    FirstName: "Matti",
    LastName: "Floci",
  
    Email: "mfloci9@youtube.com",
    Gender: "Male",
    JobTitle: "Operator",
    ContactNumber: 77089434455,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  },
  {
    Id: 21,
    FirstName: "Adam",
    LastName: "Smith",
 
    Email: "smithadam@google.pl",
    Gender: "Male",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 8045632174,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 22,
    FirstName: "James",
    LastName: "Weiser",

    Email: "jame@geocities.jp",
    Gender: "Male",
    JobTitle: "Senior Editor",
    ContactNumber: 9045632176,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 23,
    FirstName: "Joshaphine",
    LastName: "Marrrier",
  
    Email: "marrie@vk.com",
    Gender: "Male",
    JobTitle: "Programmer II",
    ContactNumber: 9945632170,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 24,
    FirstName: "Art",
    LastName: "Standell",
  
    Email: "arts@europa.eu",
    Gender: "Male",
    JobTitle: "Account Representative II",
    ContactNumber: 7772563222,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 25,
    FirstName: "Lenna",
    LastName: "Amigon",
 
    Email: "alenna@cornell.edu",
    Gender: "Male",
    JobTitle: "Quality Control Specialist",
    ContactNumber: 9922100879,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 26,
    FirstName: "Donnete",
    LastName: "Turbat",
 
    Email: "turbatd@aol.com",
    Gender: "Male",
    JobTitle: "Accounting Assistant II",
    ContactNumber: 9932100668,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 27,
    FirstName: "Simona  ",
    LastName: "Ruta",
  
    Email: "simona@sun.com",
    Gender: "Male",
    JobTitle: "Account Coordinator",
    ContactNumber: 8822100870,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 28,
    FirstName: "Gris",
    LastName: "Albrace",
 
    Email: "girsa@yandex.ru",
    Gender: "Male",
    JobTitle: "Data Coordiator",
    ContactNumber: 8722100889,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 29,
    FirstName: "Cammy",
    LastName: "Nicka",

    Email: "cnicka@techcrunch.com",
    Gender: "Female",
    JobTitle: "Administrative Assistant I",
    ContactNumber: 7892100834,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "10/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }, {
    Id: 30,
    FirstName: "Matti",
    LastName: "Floci",
   
    Email: "mfloci9@youtube.com",
    Gender: "Male",
    JobTitle: "Operator",
    ContactNumber: 77089434455,
    YOExp: 5,
    ProjectWork: "Deepink",
    Rating: 4,
    DOB: "05/04/1995",
    Image:"../../assets/images/profile_img.png",
    isEdit:false
  }
  ];
  empData: any;
  

  // ELEMENT_DATA: PeriodicElement[] | undefined;
  ngOnInit() {


  }
  constructor() { }
  setEmployeeData() {
    localStorage.setItem('employee_Data',JSON.stringify(this.ELEMENT_DATA));
  }
  // getAllData() {
  //   let allData = JSON.parse(localStorage.getItem('employee_Data')!);
  //   return of(allData);
  // }

  // getEmployeeDetails(empId: string) {
  //   let empDetails = JSON.parse(localStorage.getItem('employee_Data')!);
  //   return empDetails.find((element: any) => element.Id == empId)
  // }

}
