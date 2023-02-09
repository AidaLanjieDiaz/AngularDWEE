import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeesComponent } from './employees/employees.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EmployeComponent,
    EmployeesComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EmployeComponent,
    EmployeesComponent,
    PostsComponent,
    CommentsComponent
  ]
})
export class ComponentsModule { }
