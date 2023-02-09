import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employe/:id', component: EmployeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot( ROUTES )
    ],
    exports: [
      RouterModule
    ]
    })

export class AppRoutingModule { }
