import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number; per_page: number; }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[], totalUsers: number; }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const createUser=createAction(
  '[User] Create User Success',
  props<{data:User}>()
);

export const createUserSuccess=createAction(
  '[User] Create User Success',
  props<{data:User}>()
);

export const createUserFailure=createAction(
  '[User] Create User Success',
  props<{data:User}>()
);

export const resetUserState=createAction('[User]')
