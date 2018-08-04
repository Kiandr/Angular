import { Injectable } from "@angular/core";
import { ResponseOptions } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as $ from "jquery";
@Injectable({
    providedIn: "root"
})
export class HttpClientService {

    constructor(private http: HttpClient) {
        console.log(`HttpClient was cunstrocted${http}`);
    }

    private returnedResponse;
    private httpOptions = {
        headers: new HttpHeaders({
            'X-XSRF-Token': $('input[name=__RequestVerificationToken]').val(),
            'Access-Control-Allow-Methods': "POST",
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "X-CSRF-TOKEN"


        })
    };

    httpPostTest() {
        this.http.post("http://192.168.0.17" +
                "/api/core/test",
                "",
                this.httpOptions)
            .subscribe(res => {
                    debugger;
                    console.log("HTTP Post Response:"+res);
                },
                (err) => {
                    console.log("HTTP Post Error"+err);
                });
    }

    httpGetTest() {


        console.log(this.httpOptions);
        this.http.get("http://192.168.0.17"+"/api/core/home", this.httpOptions).subscribe(
            (response: ResponseOptions) => {


                console.log(response);
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
