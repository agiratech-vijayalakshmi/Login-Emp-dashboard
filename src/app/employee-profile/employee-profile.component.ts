import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../employee-profile.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SeriesViewerDescriptionMetadata } from 'igniteui-angular-core';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

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
  FirstName: any;
  dataArr: any;
  editList: any;
  emplist: any
  constructor(private empservice: EmployeeProfileService, private activatedroute: ActivatedRoute, private dialog: MatDialog) {
    // localStorage.setItem('employee_Data', JSON.stringify(this.empservice.ELEMENT_DATA));
  }
  ngOnInit(): void {

    this.activatedroute.queryParams
      .subscribe(params => {
        this.eId = params['Id'];
      });
    this.dataArr = JSON.parse(localStorage.getItem('employee_Data')!);
    this.emplist = this.dataArr.filter((emp: { Id: any; }) => emp.Id == this.eId)
  }


  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "50%";
    this.dialog.open(EditProfileComponent, { data: this.emplist });
    
  }
}