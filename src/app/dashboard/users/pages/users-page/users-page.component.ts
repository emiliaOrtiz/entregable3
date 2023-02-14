import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/user.actions';
import { selectTotalUsersNumber, selectUsersArray } from '../../store/user.selectors';
import { User } from '../../models/user.model';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
verUser(arg0: any) {
throw new Error('Method not implemented.');
}
editarUser(arg0: any) {
throw new Error('Method not implemented.');
}

  public displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email','status','role','editar','delete','ver'];
  public users: User[] = [];
  public totalUsers: Observable<number>;
  public perPage = 4;
  public perPageOptions = [3, 6, 12, 18];

  constructor(private store: Store) {
    this.totalUsers = this.store.select(selectTotalUsersNumber);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers({ page: 1, per_page: this.perPage }));
    this.store.select(selectUsersArray)
      .subscribe((users) => {
        this.users = users;
      });
  }
    deleteUser(id: number) {
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
            `The User has been deleted`,
            'success'
          )
          this.users = this.users.filter(user => user.id!=id);
          
        }
      })

       
    }
    createUser() {
    throw null;
    }

  onPageChange(ev: PageEvent) {
    this.store.dispatch(loadUsers({ page: ev.pageIndex + 1, per_page: ev.pageSize }))
  }
}
