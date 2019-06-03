import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class DashboardAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private tokenService: TokenService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.tokenService.hasToken()) {
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }

}