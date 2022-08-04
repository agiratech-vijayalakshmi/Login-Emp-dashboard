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
  // editForm!:FormGroup;

  eUpdate: any;
  eRecord: any;
  editForm = new FormGroup({
    'FirstName': new FormControl(this.data[0].FirstName, Validators.required),
    'LastName': new FormControl(this.data[0].LastName, Validators.required),
    'Gender': new FormControl(this.data[0].Gender, Validators.required),
    'JobTitle': new FormControl(this.data[0].JobTitle, Validators.required),
    'DOB': new FormControl(new Date(this.data[0].DOB), Validators.required),
    'Email': new FormControl(this.data[0].Email, Validators.email),
    'ContactNumber': new FormControl(this.data[0].ContactNumber, Validators.minLength(10)),
    'YOExp': new FormControl(this.data[0].YOExp, Validators.required),
    'ProjectWork': new FormControl(this.data[0].ProjectWork, Validators.required)
  });

  constructor(private fb: FormBuilder, private empservice: EmployeeProfileService, public dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private route: Router) {}

  ngOnInit(): void {


  }

  onSave() {
    this.eUpdate = JSON.parse(localStorage.getItem('employee_Data')!);
    this.eRecord = this.eUpdate.findIndex((emp: any) => { return emp.Id == this.data[0].Id });
    this.eUpdate[this.eRecord].FirstName = this.editForm.controls['FirstName'].value;
    this.eUpdate[this.eRecord].LastName = this.editForm.controls['LastName'].value;
    this.eUpdate[this.eRecord].Gender = this.editForm.controls['Gender'].value;
    this.eUpdate[this.eRecord].JobTitle = this.editForm.controls['JobTitle'].value;
    this.eUpdate[this.eRecord].DOB = this.editForm.controls['DOB'].value;
    this.eUpdate[this.eRecord].Email = this.editForm.controls['Email'].value;
    this.eUpdate[this.eRecord].ContactNumber = this.editForm.controls['ContactNumber'].value;
    this.eUpdate[this.eRecord].YOExp = this.editForm.controls['YOExp'].value;
    this.eUpdate[this.eRecord].ProjectWork = this.editForm.controls['ProjectWork'].value;
    localStorage.setItem('employee_Data', JSON.stringify(this.eUpdate));
    this.route.navigate(['/employee-table']);
    this.dialogRef.close();
  }
}




