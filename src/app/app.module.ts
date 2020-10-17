import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerRecorderComponent } from './answer-recorder/answer-recorder.component';
import { SpeechRecognitionService } from './speech.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { HeaderComponent } from './header/header.component';
import { UploadSubjectComponent } from './upload-subject/upload-subject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LearnComponent } from './learn/learn.component';
import { BackBtnComponent } from './back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerRecorderComponent,
    NavbarComponent,
    BtnMenuComponent,
    SubjectListComponent,
    HeaderComponent,
    UploadSubjectComponent,
    LearnComponent,
    BackBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ SpeechRecognitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
