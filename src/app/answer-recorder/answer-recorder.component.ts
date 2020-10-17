import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech.service';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-answer-recorder',
  templateUrl: './answer-recorder.component.html',
  styleUrls: ['./answer-recorder.component.scss']
})

export class AnswerRecorderComponent implements OnInit {
  answerFlag: boolean = false;
  subjectParam: string = '';
  subject;
  status: string = ''; // listening, ready
  result: string = ''; // what was heard
  target: string = ''; // what is needed to replicate
  targetAnswer: string = '';
  // phrases: string[] = [
  //   'I love to sing because it\'s fun',
  //   'where are you going',
  //   'can I call you tomorrow',
  //   'why did you talk while I was talking',
  //   'she enjoys reading books and playing games',
  //   'where are you going',
  //   'have a great day',
  //   'she sells seashells on the seashore'
  // ];  

  constructor(private speechService: SpeechRecognitionService, private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.subjectParam = this.route.snapshot.paramMap.get('subject');        
    this.subject = this.subjectService.getSubjectByName(this.subjectParam);
    console.log('subject is ', this.subject);
  }

  selectRandom() {
    const randomIndex = Math.floor(Math.random() * this.subject.generated_questions.length);
    return randomIndex;
  }
  toggleAnswer() {
    this.answerFlag = !this.answerFlag;    
  }
  testSpeechService() {
    this.status = 'listening';  
    this.targetAnswer = this.subject.generated_questions[this.selectRandom()].answer;
    // To ensure case consistency while checking with the returned output text
    this.targetAnswer = this.targetAnswer.toLowerCase();
    this.target = this.subject.generated_questions[this.selectRandom()].question;  
  
    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + this.targetAnswer +';';
    // this.speechService.addGrammar(grammar);
    this.speechService.record(grammar).subscribe(res => {
      console.log('FINISHED listening.. heard ', res);
      this.result = res;
      this.status = 'Finished analyzing. Waiting for next answer'
    })
  }
}

