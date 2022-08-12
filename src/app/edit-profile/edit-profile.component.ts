import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { EmployeeProfileService } from '../employee-profile.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';

// import {MaterialModule} from '@angular/material';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  eUpdate: any;
  eRecord: any;
  isUpdate:Boolean | undefined;
  constructor(private fb: FormBuilder, private empservice: EmployeeProfileService, public dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private route: Router) { }

  ngOnInit(): void { }

  editForm = this.fb.group({
    FirstName: [(this.data[0].FirstName), [Validators.required]],
    LastName: [(this.data[0].LastName), [Validators.required]],
    Gender: [(this.data[0].Gender), [Validators.required]],
    JobTitle: [(this.data[0].JobTitle), [Validators.required]],
    DOB: [(new Date(this.data[0].DOB)), [Validators.required]],
    Email: [(this.data[0].Email), [Validators.required, Validators.email]],
    ContactNumber: [(this.data[0].ContactNumber), [Validators.required, Validators.minLength(10)]],
    YOExp: [(this.data[0].YOExp), [Validators.required]],
    ProjectWork: [(this.data[0].ProjectWork), [Validators.required]],

  });



  onSave() {
    this.eUpdate = JSON.parse(localStorage.getItem('employee_Data')!);
    this.eRecord = this.eUpdate.findIndex((emp: any) => { return emp.Id == this.data[0].Id });
    var updateArr: any = {
      Id: this.eUpdate[this.eRecord].Id,
      FirstName: this.editForm.controls['FirstName'].value,
      LastName: this.editForm.controls['LastName'].value,
      Gender: this.editForm.controls['Gender'].value,
      JobTitle: this.editForm.controls['JobTitle'].value,
      DOB: this.editForm.controls['DOB'].value,
      Email: this.editForm.controls['Email'].value,
      ContactNumber: this.editForm.controls['ContactNumber'].value,
      YOExp: this.editForm.controls['YOExp'].value,
      ProjectWork: this.editForm.controls['ProjectWork'].value,
      Image: this.eUpdate[this.eRecord].Image,
      Rating: this.eUpdate[this.eRecord].Rating,
      isEdit: this.eUpdate[this.eRecord].isEdit

    };
    this.eUpdate[this.eRecord] = updateArr;

    localStorage.setItem('employee_Data', JSON.stringify(this.eUpdate));

    this.dialogRef.close();
  }
}




