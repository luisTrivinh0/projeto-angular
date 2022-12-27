import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { AlertService } from "../alert/alert.service";
import { Course } from "./course";
import { CourseService } from "./courses.service";
@Component({
  templateUrl: './course-edit.component.html'
})

export class CourseEditComponent implements OnInit{

  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private alertServe: AlertService,
    private toastr: ToastrService,
    private routerService: Router
  ) { };

  ngOnInit(): void {
    this.courseService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error: ', err)
    });
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => {
        this.alertServe.alertPending = true;
        this.alertServe.courseCode = course.code;
        this.routerService.navigateByUrl('/courses');
      },
      error: err => this.toastr.error('Curso não pôde ser alterado.')
    });
  }
}