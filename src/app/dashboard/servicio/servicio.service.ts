import { Injectable } from '@angular/core';
import { Student } from 'src/app/core/models';
import { Cursos } from 'src/app/core/models/cursos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  students: Student[]=[
    new Student(1,'Taehyung','Kim',true,'tae.kim@gmail.com',['Angular','Vue']),
    new Student(2,'Namjoon','Kim',false,'namjoon.kim@gmail.com',['Java','Web Design']),
    new Student(3,'Junsu','Kim',false,'junsu.kim@gmail.com',['Angular']),
    new Student(4,'Jaejoong','Kim',true,'jae.kim@gmail.com',['Vue','AWS Cloud']),
    new Student(5,'Leonardo','Dicaprio',false,'',['Gamer Dev']),
    new Student(6,'Nick','Carter',true,'nick.carter@gmail.com',['Java']),
    new Student(7,'Brian','Littrell',true,'brian.littrell@gmail.com',['React','Vue'])
  ];

  cursos:Cursos[]=[
    new Cursos(1,'Angular','Lucas tevez',Number(40),true,'Mondays & fridays 20:00 p.m'),
    new Cursos(2,'React','pepe argento',Number(43),false,'Tuesday & westday 18:00 p.m'),

  ];
    
  
  constructor() { }

public getStudentsList():Student[]{
  return this.students;
}
public getCursosList():Cursos[]{
    return this.cursos;
}


}
