import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeacherComponent } from './components/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';

const routes: Routes = [
  {path: 'teachers', component: ListTeacherComponent},
  {path: 'create-teacher', component: CreateTeacherComponent},
  {path: '', redirectTo: 'teachers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
