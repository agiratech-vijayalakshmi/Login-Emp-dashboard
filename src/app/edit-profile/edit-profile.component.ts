import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { } from '@angular/material';
import { EmployeeProfileService } from '../employee-profile.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
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
    'DOB': new FormControl(this.data[0].DOB, Validators.required),
    'Email': new FormControl(this.data[0].Email, Validators.email),
    'ContactNumber': new FormControl(this.data[0].ContactNumber, Validators.minLength(10)),
    'YOExp': new FormControl(this.data[0].YOExp, Validators.required),
    'ProjectWork': new FormControl(this.data[0].ProjectWork, Validators.required)
  });

  constructor(private fb: FormBuilder, private empservice: EmployeeProfileService, public dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  // options: string[] = ['Account Coordinator', 'Data Coordiator', 'Operator', 'Administrative Assistant I', 'Quality Control Specialist', 'Account Representative II', 'Senior Editor', 'Programmer II'];
  options = [{key:"Account Coordinator",value:"Account Coordinator"},{key:"Data Coordiator",value:"Data Coordiator"},{key:"Operator",value:"Operator"},{key:"Operator",value:"Operator"},{key:"Administrative Assistant I",value:"Administrative Assistant I"},{key:"Quality Control Specialist",value:"Quality Control Specialist"}]

  ngOnInit(): void {
    console.log(this.data);

  }

  onSave() {



    this.eUpdate = JSON.parse(localStorage.getItem('employee_Data')!);
    this.eRecord = this.eUpdate.findIndex((emp: any) => { return emp.Id == this.data[0].Id });
    console.log(this.eRecord);
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
    console.log(localStorage.setItem("test",JSON.stringify("scnas")))
    console.log(this.eUpdate);
    this.dialogRef.close();
    
   

  }
}




