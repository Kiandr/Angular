import { Injectable } from "@angular/core";
import { ResponseOptions } from "@angular/http";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import * as $ from "jquery";
@Injectable({
    providedIn: "root"
})
export class HttpClientService {
    constructor(private http: HttpClient) {
        console.log(`HttpClient was cunstrocted${http}`);
    }

    private httpHeader =
    {
        'X-XSRF-Token': $('input[name=__RequestVerificationToken]').val(),
        'Access-Control-Allow-Methods': "POST",
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "X-CSRF-TOKEN"};
    private httpOption = {
        headers: this.httpHeader,
        observe: "response"

    };

    httpPostTest() {
        this.http.post<HttpResponse<any>>("http://192.168.0.17" +
                "/api/core/test",
                "",
                {
                    headers:this.httpHeader, observe:"response"
                })
            //{ headers: { 'X-XSRF-Token': $('input[name=__RequestVerificationToken]').val()}, observe :"response"})
            .subscribe(
                (httpResponse: HttpResponse<any>) => {
                    //debugger;
                    console.log("This is Http Response ==>" + Date.now().toLocaleString() + httpResponse);
                    console.log(httpResponse.status);
                    console.log(httpResponse.statusText);
                    console.log(httpResponse.headers);
                    console.log(httpResponse.body);
                },
            (httpErrorResponse: HttpErrorResponse) => {
                //debugger;
                console.log("This is Http Response ==>" + Date.now().toLocaleString() + httpErrorResponse);
                console.log(httpErrorResponse.status);
                console.log(httpErrorResponse.statusText);
                console.log(httpErrorResponse.headers);
                console.log(httpErrorResponse.message);
                });
    }

    httpGetTest() {

        this.http.get("http://192.168.0.17" + "/api/core/home", {observe:"response"}).subscribe(
            (response: HttpResponse<any>) => {


                console.log(response.status);
            },
            (responseHeader) => {
                debugger;
                console.log(responseHeader.error);
                console.log(responseHeader.status);
                console.log(responseHeader.statusText);
                console.log(responseHeader.url);

            }
        );

    }
}
