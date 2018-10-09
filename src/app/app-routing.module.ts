import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  //{ path: '', component: DepartmentListComponent},//by default show department value
  //{ path: '', redirectTo: '/departments', pathMatch: 'prefix'},// redirect to departments each time// 
  //prefix indicate the blank and full indicate the full original url on click on button
  { path: '', redirectTo: '/departments', pathMatch: 'full'},//simple navigation
 { path: 'departments', component: DepartmentListComponent},//simple navigation
 
 { 
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
      children:[
                {path: 'overview', component: DepartmentOverviewComponent},
                {path: 'contact', component: DepartmentContactComponent}
              ]
  },
  // { path: '', redirectTo: '/department-list', pathMatch: 'full'},//relative navigaion
  //{ path: 'department-list', component: DepartmentListComponent},//relative navigaion
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent}//wilfcard route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  DepartmentListComponent, 
                                  EmployeeListComponent, 
                                  PageNotFoundComponent,
                                  DepartmentDetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent
                                ];
