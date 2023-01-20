import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './pages/courses-page/courses-page.component';
import { CursoDialogComponent } from './pages/course-detail-page/course-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: ':courseId',
    component: CursoDialogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class CoursesRoutingModule { }
