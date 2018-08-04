import { Injectable } from '@angular/core';
import {HttpClientService} from'./http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClientService) { 
    console.log("Auth Service was created!");
  }
    public httpGetTest():void{
        this.http.httpGetTest();
    console.log("App login was called!");
    }

    public httpPostTest(): void {
        this.http.httpPostTest();
        console.log("App login was called!");
    }
}
