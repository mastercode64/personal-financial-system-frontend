import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from '../_services/token.service';

@Injectable()
export class SigninAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private tokenService: TokenService) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.tokenService.hasToken()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }

}