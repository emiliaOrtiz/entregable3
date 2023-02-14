import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-detail-page',
  templateUrl: './users-detail-page.component.html',
  styleUrls: ['./users-detail-page.component.scss']
})
export class UsersDetailPageComponent {
user: User | undefined;
title: string='Detalle de usuario';
urlBase:string='https://reqres.in/api/';


constructor(private readonly http:HttpClient,
  ){
   
}




}
