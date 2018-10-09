import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
//import { DepartmentContactComponent } from './department-contact/department-contact.component';
//import { DepartmentDetailComponent } from './department-detail/department-detail.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { DepartmentListComponent } from './department-list/department-list.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    //DepartmentOverviewComponent,
    //DepartmentContactComponent
    //DepartmentDetailComponent
    //PageNotFoundComponent
    //DepartmentListComponent,
    //EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
