import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/core/models/cursos';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CursoDialogComponent {

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  nameControl=new FormControl('',Validators.required);
  profesorControl=new FormControl('',[Validators.required,Validators.minLength(3)]);
  horarioControl=new FormControl('Mondays & fridays 20:00 p.m',[Validators.required,Validators.minLength(4)]);
  cursoForm=new FormGroup({
  name: this.nameControl,
  profesor:this.profesorControl,
  horario:this.horarioControl,

  });
 
  resultado: string | undefined;
  matcher = new MyErrorStateMatcher();

  constructor(private readonly dialogRef:DialogRef,@Inject(MAT_DIALOG_DATA) public data: Cursos){
    if(data){
      this.cursoForm.patchValue(data);
      
    }
    } 
    
  close(
    ) {
      this.dialogRef.close();
    }  
}