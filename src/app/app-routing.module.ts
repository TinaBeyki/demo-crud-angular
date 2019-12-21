import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './user/list-users/list-users.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {RemoveUserComponent} from './user/remove-user/remove-user.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';
import {FindByIdComponent} from './user/find-by-id/find-by-id.component';


const routes: Routes = [
  {path: 'list', component : ListUsersComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'remove', component: RemoveUserComponent},
  {path: 'update', component: UpdateUserComponent },
  {path: 'findById', component: FindByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
