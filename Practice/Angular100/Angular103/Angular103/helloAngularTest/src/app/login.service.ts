import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Login } from './login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


  export interface Login {
    loginUrl: string;
    textfile: string;
  }

@Injectable()
export class LoginService {

 
  configUrl = 'assets/app.json';

  constructor(private http: HttpClient)  {   }

  getLogin () {
 
    this.http.get(this.configUrl).subscribe(data => console.log(data));
}




getLoginResponse(): Observable<HttpResponse<Login>> {
  return this.http.get<Login>(
   this.configUrl, { observe: 'response' });
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};





makeIntentionalError() {
  return this.http.get('not/a/real/url')
    .pipe(
      catchError(this.handleError)
    );
}

}

