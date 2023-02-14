import { Cursos } from "./cursos";

export class Student {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public active: boolean,
    public email: string,
    public cursos:String[],
  ){}
}

