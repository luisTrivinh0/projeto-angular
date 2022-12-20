import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseEditComponent } from './courses/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseEditComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    HomeComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/edit/:id', component: CourseEditComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },

      {
        path: '**', component: Error404Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
