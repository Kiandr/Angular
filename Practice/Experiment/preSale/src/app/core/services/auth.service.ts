import { Injectable } from '@angular/core';
import {HttpClientService} from'./http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClientService) { 
    console.log("Auth Service was created!");
  }
  public AppLogin():void{
    this.http.getHttp();
    console.log("App login was called!");
  }
}
