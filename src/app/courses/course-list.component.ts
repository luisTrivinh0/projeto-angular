import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy!: string;

  constructor(private CourseService: CourseService){

  }
  ngOnInit(): void{
    this._courses = this.CourseService.retriveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
      || course.code.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
      || course.price == parseFloat(this._filterBy));
  }

  get filter() {
    return this._filterBy;
  }
}