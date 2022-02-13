import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos: any[];

  constructor(private userService: UserService) {

    this.userService.getProfileRepos().subscribe((repos) => {
      this.repos = repos;
    })
   }

  ngOnInit(): void {
  }

}
