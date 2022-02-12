import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientId: '4003015ac715af0ee7ba';
  private clientSecret: 'd1e927e3c82e0f209ca911927c257eb57cf91094';
  constructor(private httpClient:HttpClient) {
    this.username='isaacwach';
   }
   getProfileInfo(){
     return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
     .pipe(map((response: any)=>response.json()))
   }
}
