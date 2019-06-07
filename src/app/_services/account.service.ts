import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) { }

    createAccount(name: string, email: string, password: string) {
        const loginUrl = `${apiUrl}/users`;
        const body = {
            name,
            email,
            password
        };

        return this.http.post<any>(
            loginUrl,
            body,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                }),
                observe: "response",
                withCredentials: false
            })
            .subscribe(res => {
                console.log(res);
            });


    }
}