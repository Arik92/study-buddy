import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';
import { SpeechRecognitionService } from './speech.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerRecorderComponent,
    NavbarComponent,
    BtnMenuComponent,
    SubjectListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SpeechRecognitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
