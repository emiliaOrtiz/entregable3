import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take, map, toArray } from 'rxjs';
import { Student } from 'src/app/core/models';
import { Cursos } from 'src/app/core/models/cursos';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students = new BehaviorSubject<Student[]>([
    new Student(1,'Taehyung','Kim',true,'tae.kim@email.com',['Angular','Vue']),
    new Student(2,'Namjoon','Kim',false,'nam.kim@email.com',['Java','Web Design']),
    new Student(3,'Junsu','Kim',true,'jun.kim@email.com',['Angular']),
    new Student(4,'Jaejoong','Kim',false,'jae.kim@email.com',['Vue','AWS Cloud']),
    new Student(5,'Leonardo','Dicaprio',true,'leo.di@email.com',['Gamer Dev']),
    new Student(6,'Nick','Carter',true,'nick.car@email.com',['Java']),
    new Student(7,'Brian','Littrell',true,'bri.li@email.com',['React','Vue']),
  ]);


  public students$: Observable<Student[]>;
  constructor() {
    this.students$ = this.students.asObservable()
  }

  createStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([
        ...students,
        new Student(lastId + 1, newStudentData.firstName, newStudentData.lastName, true,newStudentData.email,newStudentData.cursos)
      ])
    })
  }

  editStudent(id: number, data: Partial<Student>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(
        students.map(
          (stu) => stu.id === id
            ? new Student(
              stu.id,
              data.firstName || stu.firstName,
              data.lastName || stu.lastName,
              data.active || stu.active,
              data.email || stu.email,
              data.cursos||stu.cursos,
            )
            : stu
        )
      )
    })
  }

  totalStudents():number{
    let total=0;
    this.students.subscribe((valor)=>{
      total=valor.length;
    })
    return total;
  }

  removeStudent(id: number): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((stu) => stu.id !== id))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1),
      map((students) => students.find((stu) => stu.id === id) || null)
    )
  }
}
