import { Component, OnDestroy, OnInit,ViewChild} from '@angular/core';
import { Student } from 'src/app/core/models';
import { StudentModalComponent } from '../../components/student-modal/student-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Observable, Subject} from 'rxjs';
import Swal from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
//import { ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnDestroy {


  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
  
  public students: Observable<Student[]>;
  public totalStudents:10;
  public perPage: 4;
  public perPageOptions = [3, 6, 12, 18];


  private destroyed$ = new Subject()


  constructor(private readonly studentsService: StudentsService, 
    private readonly dialogService: MatDialog) {
    this.students = this.studentsService.students$;
    this.totalStudents = 10;
    this.perPage=4;
    
  }
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentModalComponent, {
      data: element,
      height: '400px',
      width: '600px',
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.editStudent(element.id, data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Estudiante fue Editado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
        
      }
    })
  }

  createStudent() {
    const dialog = this.dialogService.open(StudentModalComponent,{
      height: '400px',
      width: '600px',
    })
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentsService.createStudent({ firstName: data.firstName, lastName: data.lastName,email:data.email,cursos:data.cursos });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El Estudiante fue Creado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  deleteStudent(element: Student) {
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
          `The Student ${element.firstName}  ${element.lastName} has been deleted`,
          'success'
        )
        this.studentsService.removeStudent(element.id);
      }
    })
   
  }

  onPageChange($event: PageEvent) {
    throw new Error('Method not implemented.');
    }
 
}
