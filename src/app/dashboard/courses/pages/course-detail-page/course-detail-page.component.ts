import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/core/models/cursos';


@Component({
  selector: 'app-curso-dialog',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CursoDialogComponent {
  nameControl=new FormControl('');
  profesorControl=new FormControl('');
  cursoForm=new FormGroup({
  name: this.nameControl,
  profesor:this.profesorControl,
  });

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