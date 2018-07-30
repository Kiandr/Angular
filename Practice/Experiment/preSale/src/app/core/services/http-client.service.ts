import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions,Response, ResponseOptions} from '@angular/http';

import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { EmptyError } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private http: HttpClient) {
    console.log("HttpClient was cunstrocted"+http);
   }
  private returnedResponse ;

   public getHttp() {
    
    const head = new HttpHeaders();
    head.append('Access-Control-Allow-Headers', 'Content-Type');
    head.append('Access-Control-Allow-Methods', 'GET');
    head.append('Access-Control-Allow-Origin', '*');
    
    // const url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Santa+Cruz&key=MY_KEY";
    // let url = 'https://enlivenfinancial.azurewebsites.net/';
    // let testHeader = new Headers({ 'Access-Control-Allow-Origin': '*','Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: testHeader });

        // this.http.get(url)// return 
    // this.http.get(url)
    //     .map(r => this.dataHere = r.json())
    //     .catch((error:any) => Observable.throw(error.json().error));
    
      //  this.http.get('http://jsonplaceholder.typicode.com/posts',{headers:head}).subscribe(
    this.http.get('https://enlivenfinancial.azurewebsites.net/',{headers:head}).subscribe(
     (response:ResponseOptions )=> {
     
     debugger;
     console.log(response);
    },
    (responseHeader)=>{
      debugger;
      console.log(responseHeader.error);
      console.log(responseHeader.status);
      console.log(responseHeader.statusText);
      console.log(responseHeader.url);

    }
  );
    
  }
}
