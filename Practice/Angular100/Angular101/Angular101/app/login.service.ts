

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class loginService {
    getlogin() {
        return ["Test@test.com"];
    }

}


@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }
}