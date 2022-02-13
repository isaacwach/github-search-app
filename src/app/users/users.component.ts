import { Component, OnInit } from '@angular/core';
//import { profile } from 'console';
import {UserService} from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
//profile: any[];
profile: {name: string; followers: number; login: string; company: string; avatar_url: string; bio: string; public_repos: number; html_url: string;}
  constructor(private userService: UserService) {
    console.log("heey")
    this.userService.getProfileInfo().subscribe((profile =>{
      console.log(profile)
      this.profile = profile
    }))
   }

  ngOnInit(): void {
  }

}
