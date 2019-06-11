import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        NavbarTopComponent,
        SidebarComponent,
        BreadcrumbComponent,
        FooterComponent
    ],
    imports: [
        RouterModule
    ]
})
export class DashboardModule {

}