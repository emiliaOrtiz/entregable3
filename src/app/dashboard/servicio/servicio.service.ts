import { Injectable } from '@angular/core';
import { Student } from 'src/app/core/models';
import { Cursos } from 'src/app/core/models/cursos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  students: Student[]=[
    new Student(1,'Taehyung','Kim',true),
    new Student(2,'Namjoon','Kim',true),
    new Student(3,'Junsu','Kim',true),
    new Student(4,'Jaejoong','Kim',true),
    new Student(5,'Leonardo','Dicaprio',true),
    new Student(6,'Nick','Carter',true),
    new Student(7,'Brian','Littrell',true),

  ];
  cursos:Cursos[]=[
    new Cursos(1,'Angular','Lucas tevez',Number(40),true,'Mondays & fridays 20:00 p.m'),
    new Cursos(2,'React','pepe argento',Number(43),true,'Tuesday & westday 18:00 p.m'),

  ];
    
  
  constructor() { }

public getStudentsList():Student[]{
  return this.students;
}

public getCursosList():Cursos[]{
    return this.cursos;
}


}
