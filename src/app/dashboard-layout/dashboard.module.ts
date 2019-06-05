import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from '../views/home/home.component';
import { ExpenseComponent } from '../views/expense/expense.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        NavbarTopComponent,
        SidebarComponent,
        BreadcrumbComponent,
        FooterComponent,
        HomeComponent,
        ExpenseComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
    ]
})
export class DashboardModule {

}