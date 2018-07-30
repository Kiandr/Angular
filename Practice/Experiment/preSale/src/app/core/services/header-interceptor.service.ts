import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor { 

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
//    const clonedRequest = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    const clonedRequest = req.clone();
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
