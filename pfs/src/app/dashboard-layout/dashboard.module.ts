import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { ExpenseComponent } from '../expense/expense.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        NavbarTopComponent,
        SidebarComponent,
        HomeComponent,
        ExpenseComponent
    ],
    imports: [
        RouterModule,
        BrowserModule
    ]
})
export class DashboardModule {

}