import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.componet.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.90,
        code: 'ANG-001',
        duration: 120,
        rating: 4.5,
        releaseDate: '9 de Dezembro de 2022'
      },
      {
        id: 2,
        name: 'PHP: Forms',
        imageUrl: '',
        price: 59.90,
        code: 'PHP-001',
        duration: 60,
        rating: 4.7,
        releaseDate: '19 de Dezembro de 2022'
      }
    ]
  }
}