import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddstudentComponent} from './components/addstudent/addstudent.component';
import {EditstudentComponent} from './components/editstudent/editstudent.component';
import {ListstudentComponent} from './components/liststudent/liststudent.component';
import {LoginComponent} from './components/login/login.component';



const routes: Routes = [
  {
    path:'add',
   component : AddstudentComponent
  },
  {
    path:'edit/:id',
    component : EditstudentComponent
  },
  {
    path:'list',
    component : ListstudentComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
