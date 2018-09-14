import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService , Login} from '../login.service';
import { Router } from '@angular/router';






@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [ LoginService ],
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
        result: any = {};
       configUrl = 'assets/app.json';

    constructor(private http: HttpClient,private loginService: LoginService) { }

ngOnInit():void {
     this.http.get("http://enlivenfinancial.azurewebsites.net/").subscribe(data =>  {
      console.log("the Json response: " + JSON.stringify(data));
      this.result = data;

    
     });

}



    showLogin() {

      this.http.get(this.configUrl).subscribe(data => console.log(data));
     
      
    }


}
