import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/teacher.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  constructor(private teacherService: TeacherService, private router: Router) { }

  data: any

  form = new FormGroup({
    name: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.data = this.form.value;
    console.log(this.data);

    this.teacherService.createTeacher(this.data).subscribe(data => {
      console.log(data);
      this.router.navigate(['/teachers']);
    },
      error => console.log(error));
  }
}
