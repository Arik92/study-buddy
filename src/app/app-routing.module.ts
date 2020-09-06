import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  { path: '',component: BtnMenuComponent, pathMatch:'full' },
  { path: 'subjectList/:intent', component: SubjectListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
