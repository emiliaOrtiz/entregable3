import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cursos } from 'src/app/core/models/cursos';
import { ServicioService } from 'src/app/dashboard/servicio/servicio.service';
import { CursoDialogComponent } from '../course-detail-page/course-detail-page.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CursosComponent {

public title:string="administrar cursos";

addCurso() {
  const dialog=this.dialogService.open(CursoDialogComponent,{
    height: '400px',
    width: '600px',
  })
  dialog.afterClosed().subscribe((value)=>{
    if(value){
      const lastId=this.servicio.students[this.cursos.length-1]?.id;
      
      this.cursos=[...this.cursos,new Cursos(lastId+1,value.name,value.profesor,value.totalAlumn,true,value.horario)]
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Curso fue Creado con Exito',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
    
  )}


buttonStateFuntion() {
throw new Error('Method not implemented.');
}
 
  cursos:Cursos[]=this.servicio.getCursosList();
  displayedColumns=['id','name','profesor','total','isActive','horario','edit','delete']

  constructor(private readonly dialogService: MatDialog,
    private readonly servicio:ServicioService){

  }

removeCurso(curso:Cursos){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        `The Course ${curso.name}  has been deleted!`,
        'success'
      )
      this.cursos=this.cursos.filter((element)=>element.id!==curso.id);
    }
  })
}

  editCurso(curso:Cursos){
    const dialog=this.dialogService.open(CursoDialogComponent,{
      data:curso,
      height: '400px',
      width: '600px',
    })
    dialog.afterClosed().subscribe((data)=>{
        if(data){
         this.cursos=this.cursos.map((elem)=>elem.id===curso.id? {...elem,...data}:elem)
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Curso fue Editado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
        }

      })
  }



}