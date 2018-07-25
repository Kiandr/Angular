import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {
    console.log("HttpClient was cunstrocted"+http);
   }


   // test 01

   configUrl = 'assets/config.json';
   public httpGet(data: any ):any{
    
   }
   public getConfig() {
    this.http.post('https://google.com',null).subscribe();
    
    // this.http.post('login/userDetail.json',null).subscribe(data =>  { name:  data['name']});
  }
}
