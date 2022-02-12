import { Component, OnInit } from '@angular/core';
//import { profile } from 'console';
import {UserService} from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe((profile =>{

    }))
   }

  ngOnInit(): void {
  }

}
