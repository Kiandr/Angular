import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpXsrfTokenExtractor
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor { 

    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
      console.log("Interceptor was called");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
//    const clonedRequest = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
      const headerName = 'X-XSRF-TOKEN';
      let token = this.tokenExtractor.getToken() as string;
      const clonedRequest = req.clone();
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
