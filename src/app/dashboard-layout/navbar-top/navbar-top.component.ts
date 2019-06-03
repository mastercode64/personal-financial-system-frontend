import { Component, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
    selector: '[app-navbar-top]',
    templateUrl: './navbar-top.component.html'
})
export class NavbarTopComponent {
    @Input()
    navbarTopText: string;
    
    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }
}