import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/teacher';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  teachers: Teacher[] | undefined;
  url: string = "http://localhost:8080/api/v1/";

  constructor(private teacherService: TeacherService) {

  }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getTeachersList().subscribe(data => {
      this.teachers = data;
    })
  }
}
