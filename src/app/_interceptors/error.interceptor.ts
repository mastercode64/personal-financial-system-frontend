import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let isLoginRequest: boolean = request.url.endsWith('/signin');
            let isSignupRequest: boolean = request.url.endsWith('/signup');

            if (err.status === 401 && !isLoginRequest && !isSignupRequest) {
                this.authService.logout();
            }
            return next.handle(request);
        }))
    }
}