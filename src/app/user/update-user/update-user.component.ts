import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../user-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserServiceService) {
    console.log();
  }


  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      nationalId: new FormControl(''),
      phoneNumber: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl('')
    });
  }
  update(): void {
    console.log(this.userForm.value);
    this.userService.update(this.userForm.get('id').value, this.userForm.value);
  }


}
