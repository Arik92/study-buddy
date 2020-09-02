import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';
import { SpeechRecognitionService } from './speech.service';

@NgModule({
  declarations: [
    AppComponent,
    AnswerRecorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SpeechRecognitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
