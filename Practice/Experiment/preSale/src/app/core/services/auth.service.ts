import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientService} from'./http-client.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientService) { 
    console.log("Auth Service was created!");
  }
  public AppLogin():void{
    this.http.getConfig();
    console.log("App login was called!");
  }
}
