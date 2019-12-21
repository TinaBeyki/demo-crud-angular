import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../user-service.service';
import {User} from '../create-user/User';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];

  constructor(private service: UserServiceService) {
  }

  ngOnInit(): void {
    this.service.getList()
      .subscribe(data => {this.users = data});
  }

}
