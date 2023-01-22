import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models';
import { StudentModalComponent } from '../../components/student-modal/student-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Observable, Subject} from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnDestroy {

  displayedColumns = ['id', 'firstName', 'lastName', 'active', 'delete', 'edit', 'viewDetail'];
  students: Observable<Student[]>;
  private destroyed$ = new Subject()


  constructor(private readonly studentsService: StudentsService, private readonly dialogService: MatDialog) {
    this.students = this.studentsService.students$;
  }

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
        this.studentsService.createStudent({ firstName: data.firstName, lastName: data.lastName });
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

 
}
