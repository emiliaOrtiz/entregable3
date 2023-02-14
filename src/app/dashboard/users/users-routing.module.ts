import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersDetailPageComponent } from './users-detail-page/users-detail-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPageComponent
      },
      {
        path: ':userId',
        component: UsersDetailPageComponent
      }
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class UsersRoutingModule { }
