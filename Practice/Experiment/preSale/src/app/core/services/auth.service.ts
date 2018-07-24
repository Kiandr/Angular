import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    console.log("Auth Service was created!");
  }
  public AppLogin():void{
    console.log("App login was called!");
  }
}
