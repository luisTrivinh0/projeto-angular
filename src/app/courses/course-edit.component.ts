import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Course } from "./course";
import { CourseService } from "./courses.service";

@Component({
  templateUrl: './course-edit.component.html'
})

export class CourseEditComponent implements OnInit{

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){ }

  ngOnInit(): void {
    let retrivedCourse = this.courseService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
    let retrivedCourseName = retrivedCourse.name
    if (retrivedCourseName == "") {
      window.history.back();
    }
    this.course = this.courseService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  save(): void{
    this.courseService.save(this.course);
  }
}