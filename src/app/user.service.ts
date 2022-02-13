import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// import 'rxjs/add/observable/throw';

// Operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';

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
     var profile= this.httpClient.get("https://api.github.com/users/" + this.username)
     .pipe(map((response: any)=>response));
     console.log(profile)
     return profile
   }
}
