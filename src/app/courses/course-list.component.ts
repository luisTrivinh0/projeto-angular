import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './courses.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../alert/alert.service';

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy!: string;

  constructor(
    private courseService: CourseService,
    private toastr: ToastrService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    if (this.alertService.alertPending) {
      this.alertToast();
    }
    this.retriveAll();
  }

  private alertToast() {
    this.toastr.success('Curso ' + this.alertService.courseCode + ' alterado com sucesso!');
    this.alertService.alertPending = false;
    this.alertService.courseCode = "";
  }

  retriveAll(): void{
    this.courseService.retriveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error: ', err)
    });
  }

  deleteById(courseId: number, courseCode: string): void{
    this.courseService.deleteById(courseId, courseCode).subscribe({
      next: () => {
        this.toastr.success('Curso ' + courseCode + ' deletado com sucesso!');
        this.retriveAll();
      },
      error: () => this.toastr.success('Curso ' + courseCode + ' não pôde ser deletado!'),
    })
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