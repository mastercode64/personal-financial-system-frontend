import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        NavbarTopComponent,
        SidebarComponent,
        HomeComponent
    ],
    imports:[
        RouterModule
    ]
})
export class DashboardModule{

}