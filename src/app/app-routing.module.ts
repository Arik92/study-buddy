import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UploadSubjectComponent } from './upload-subject/upload-subject.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  { path: '',component: BtnMenuComponent, pathMatch:'full' },
  { path: 'subjectList/:mode', component: SubjectListComponent },
  { path: 'questions/:subject', component: AnswerRecorderComponent },
  { path: 'learn/:subject', component: LearnComponent },
  { path: 'upload', component: UploadSubjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
