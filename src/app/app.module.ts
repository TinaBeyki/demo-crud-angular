import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import { RemoveUserComponent } from './user/remove-user/remove-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { FindByIdComponent } from './user/find-by-id/find-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUsersComponent,
    RemoveUserComponent,
    UpdateUserComponent,
    FindByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
