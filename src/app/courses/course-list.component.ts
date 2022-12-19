import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.90,
        code: 'ANG-001',
        duration: 120,
        rating: 4.5,
        releaseDate: '9 de Dezembro de 2022'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 59.90,
        code: 'ANG-002',
        duration: 60,
        rating: 4.7,
        releaseDate: '19 de Dezembro de 2022'
      }
    ]
  }
}