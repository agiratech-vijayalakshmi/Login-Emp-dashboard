import { Injectable } from '@angular/core';
import { PeriodicElement } from './employeetable/employeetable.component';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {
  ELEMENT_DATA: PeriodicElement[] = [{
    "Id": 1,
    "FirstName": "Johannah",
    "LastName": "Kiffin",
    "Age": 0,
    "Email": "jkiffin0@google.pl",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 8045632174,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 2,
    "FirstName": "Eldin",
    "LastName": "Astbery",
    "Age": 28,
    "Email": "eastbery1@geocities.jp",
    "Gender": "M",
    "JobTitle": "Senior Editor",
    "ContactNumber": 9045632176,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "8/03/1994"
  }, {
    "Id": 3,
    "FirstName": "Nahum",
    "LastName": "Mounce",
    "Age": 25,
    "Email": "nmounce2@vk.com",
    "Gender": "M",
    "JobTitle": "Programmer II",
    "ContactNumber": 9945632170,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 3.5,
    "DOB": "10/04/1992"
  }, {
    "Id": 4,
    "FirstName": "Gallard",
    "LastName": "Standell",
    "Age": 29,
    "Email": "gstandell3@europa.eu",
    "Gender": "M",
    "JobTitle": "Account Representative II",
    "ContactNumber": 7772563222,
    "YOExp": 7,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1998"
  }, {
    "Id": 5,
    "FirstName": "Koenraad",
    "LastName": "Domleo",
    "Age": 26,
    "Email": "kdomleo4@cornell.edu",
    "Gender": "M",
    "JobTitle": "Quality Control Specialist",
    "ContactNumber": 9922100879,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1996"
  }, {
    "Id": 6,
    "FirstName": "Uriah",
    "LastName": "Turbat",
    "Age": 28,
    "Email": "uturbat5@aol.com",
    "Gender": "M",
    "JobTitle": "Accounting Assistant II",
    "ContactNumber": 9932100668,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/2000"
  }, {
    "Id": 7,
    "FirstName": "Waldemar",
    "LastName": "Fowley",
    "Age": 26,
    "Email": "wfowley6@sun.com",
    "Gender": "M",
    "JobTitle": "Account Coordinator",
    "ContactNumber": 8822100870,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/2001"
  }, {
    "Id": 8,
    "FirstName": "Rodolfo",
    "LastName": "Trenchard",
    "Age": 30,
    "Email": "rtrenchard7@yandex.ru",
    "Gender": "M",
    "JobTitle": "Data Coordiator",
    "ContactNumber": 8722100889,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 9,
    "FirstName": "Konstance",
    "LastName": "Dudek",
    "Age": 31,
    "Email": "kdudek8@techcrunch.com",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 7892100834,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1997"
  }, {
    "Id": 10,
    "FirstName": "Monti",
    "LastName": "Perton",
    "Age": 32,
    "Email": "mperton9@youtube.com",
    "Gender": "M",
    "JobTitle": "Operator",
    "ContactNumber": 77089434455,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1998"
  },
  {
    "Id": 11,
    "FirstName": "Adam",
    "LastName": "Smith",
    "Age": 34,
    "Email": "smithadam@google.pl",
    "Gender": "M",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 8045632174,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1999"
  }, {
    "Id": 12,
    "FirstName": "James",
    "LastName": "Weiser",
    "Age": 28,
    "Email": "jame@geocities.jp",
    "Gender": "M",
    "JobTitle": "Senior Editor",
    "ContactNumber": 9045632176,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1999"
  }, {
    "Id": 13,
    "FirstName": "Joshaphine",
    "LastName": "Marrrier",
    "Age": 25,
    "Email": "marrie@vk.com",
    "Gender": "M",
    "JobTitle": "Programmer II",
    "ContactNumber": 9945632170,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1998"
  }, {
    "Id": 14,
    "FirstName": "Art",
    "LastName": "Standell",
    "Age": 29,
    "Email": "arts@europa.eu",
    "Gender": "M",
    "JobTitle": "Account Representative II",
    "ContactNumber": 7772563222,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1997"
  }, {
    "Id": 15,
    "FirstName": "Lenna",
    "LastName": "Amigon",
    "Age": 26,
    "Email": "alenna@cornell.edu",
    "Gender": "M",
    "JobTitle": "Quality Control Specialist",
    "ContactNumber": 9922100879,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1996"
  }, {
    "Id": 16,
    "FirstName": "Donnete",
    "LastName": "Turbat",
    "Age": 28,
    "Email": "turbatd@aol.com",
    "Gender": "M",
    "JobTitle": "Accounting Assistant II",
    "ContactNumber": 9932100668,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 17,
    "FirstName": "Simona  ",
    "LastName": "Ruta",
    "Age": 26,
    "Email": "simona@sun.com",
    "Gender": "M",
    "JobTitle": "Account Coordinator",
    "ContactNumber": 8822100870,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 18,
    "FirstName": "Gris",
    "LastName": "Albrace",
    "Age": 30,
    "Email": "girsa@yandex.ru",
    "Gender": "M",
    "JobTitle": "Data Coordiator",
    "ContactNumber": 8722100889,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 19,
    "FirstName": "Cammy",
    "LastName": "Nicka",
    "Age": 31,
    "Email": "cnicka@techcrunch.com",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 7892100834,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 20,
    "FirstName": "Matti",
    "LastName": "Floci",
    "Age": 32,
    "Email": "mfloci9@youtube.com",
    "Gender": "M",
    "JobTitle": "Operator",
    "ContactNumber": 77089434455,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  },
  {
    "Id": 21,
    "FirstName": "Adam",
    "LastName": "Smith",
    "Age": 34,
    "Email": "smithadam@google.pl",
    "Gender": "M",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 8045632174,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 22,
    "FirstName": "James",
    "LastName": "Weiser",
    "Age": 28,
    "Email": "jame@geocities.jp",
    "Gender": "M",
    "JobTitle": "Senior Editor",
    "ContactNumber": 9045632176,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 23,
    "FirstName": "Joshaphine",
    "LastName": "Marrrier",
    "Age": 25,
    "Email": "marrie@vk.com",
    "Gender": "M",
    "JobTitle": "Programmer II",
    "ContactNumber": 9945632170,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 24,
    "FirstName": "Art",
    "LastName": "Standell",
    "Age": 29,
    "Email": "arts@europa.eu",
    "Gender": "M",
    "JobTitle": "Account Representative II",
    "ContactNumber": 7772563222,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 25,
    "FirstName": "Lenna",
    "LastName": "Amigon",
    "Age": 26,
    "Email": "alenna@cornell.edu",
    "Gender": "M",
    "JobTitle": "Quality Control Specialist",
    "ContactNumber": 9922100879,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 26,
    "FirstName": "Donnete",
    "LastName": "Turbat",
    "Age": 28,
    "Email": "turbatd@aol.com",
    "Gender": "M",
    "JobTitle": "Accounting Assistant II",
    "ContactNumber": 9932100668,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 27,
    "FirstName": "Simona  ",
    "LastName": "Ruta",
    "Age": 26,
    "Email": "simona@sun.com",
    "Gender": "M",
    "JobTitle": "Account Coordinator",
    "ContactNumber": 8822100870,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 28,
    "FirstName": "Gris",
    "LastName": "Albrace",
    "Age": 30,
    "Email": "girsa@yandex.ru",
    "Gender": "M",
    "JobTitle": "Data Coordiator",
    "ContactNumber": 8722100889,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 29,
    "FirstName": "Cammy",
    "LastName": "Nicka",
    "Age": 31,
    "Email": "cnicka@techcrunch.com",
    "Gender": "F",
    "JobTitle": "Administrative Assistant I",
    "ContactNumber": 7892100834,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "10/04/1995"
  }, {
    "Id": 30,
    "FirstName": "Matti",
    "LastName": "Floci",
    "Age": 32,
    "Email": "mfloci9@youtube.com",
    "Gender": "M",
    "JobTitle": "Operator",
    "ContactNumber": 77089434455,
    "YOExp": 5,
    "ProjectWork": "Deepink",
    "Rating": 4,
    "DOB": "05/04/1995"
  }
  ];

  // ELEMENT_DATA: PeriodicElement[] | undefined;

  constructor() { }
  getData() {
    return of(this.ELEMENT_DATA);

  }
  getEmplyeeDetails(empId: string) {
    return this.ELEMENT_DATA.find((element: any) => element.Id == empId)
  }
}
