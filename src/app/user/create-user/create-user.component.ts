import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserServiceService} from '../../user-service.service';
import {User} from './User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  /*@Input() name: string;
  @Input() surname: string;
  @Input() nationalId: any;
  @Input() phoneNumber: any;
  @Input() age: number;
  @Input() email: string;
*/

  userForm: FormGroup;
  name: any;

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

  save(): void {
    this.userService.save(this.userForm.value);
  }


}
