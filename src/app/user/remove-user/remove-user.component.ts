import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../../user-service.service';
import {User} from '../User';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  users: User[];
  message: string;
  userForm: FormGroup;

  id:number;
  constructor(private service: UserServiceService) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl('')
    });
  }

  deleteUser(){
    /*this.service.delete(this.userForm.value).subscribe(
      data => this.message = "user deleted successfully"*/
    this.service.delete(this.id).subscribe(
      data =>this.message = "user deleted successfully"
    );
  }

}
