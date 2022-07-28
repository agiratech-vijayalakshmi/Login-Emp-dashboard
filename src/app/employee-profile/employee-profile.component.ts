import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../employee-profile.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SeriesViewerDescriptionMetadata } from 'igniteui-angular-core';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  eList: any;
  eId: any;
  eData: any;
  employeeID: any;
  constructor(private empservice: EmployeeProfileService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.queryParams
      .subscribe(params => {

        this.eId = params['Id'];
        this.eData = this.empservice.getEmplyeeDetails(this.eId);
        this.employeeID = this.eId;



      });
  }


  getList() {
    this.empservice.getData().subscribe({
      next: (response) => {
        this.eList = response;

      }
    });

  }
}