import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';

const routes: Routes = [
  {path: '',component: AnswerRecorderComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
