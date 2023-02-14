import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent {
  title:string="Editar Alumno"
  firstNameControl = new FormControl('', [Validators.required])
  lastNameControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.required,Validators.email])
  cursosControl=new FormControl()
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email:this.emailControl,
    cursos:this.cursosControl,
  });


  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | undefined,
  ) {
    if (data) {
      this.studentForm.patchValue(data);
      
    }
  }

  close() {
    this.dialogRef.close()
  }
}
