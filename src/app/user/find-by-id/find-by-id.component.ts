import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../user-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserProjection} from '../UserProjection';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrls: ['./find-by-id.component.css']
})
export class FindByIdComponent implements OnInit {

 /* userGroup: FormGroup;*/
  user: UserProjection[];

  constructor(private service: UserServiceService) { }

  ngOnInit() {
    /*this.userGroup = new FormGroup({
      "id": new FormControl()
    })*/
  }

  getUserById(){
    this.service.getById(/*this.userGroup.value*/).subscribe(
      data => this.user = data
    );
  }

}
