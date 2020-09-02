import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech.service';

@Component({
  selector: 'app-answer-recorder',
  templateUrl: './answer-recorder.component.html',
  styleUrls: ['./answer-recorder.component.scss']
})

export class AnswerRecorderComponent implements OnInit {
  status: string = ''; // listening, ready
  result: string = ''; // what was heard
  target: string = ''; // what is needed to replicate
  phrases: string[] = [
    'I love to sing because it\'s fun',
    'where are you going',
    'can I call you tomorrow',
    'why did you talk while I was talking',
    'she enjoys reading books and playing games',
    'where are you going',
    'have a great day',
    'she sells seashells on the seashore'
  ];  

  constructor(private speechService: SpeechRecognitionService) { }

  ngOnInit(): void {    
  }

  selectRandom() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return randomIndex;
  }

  testSpeechService() {
    this.status = 'listening';  
    let targetPhrase = this.phrases[this.selectRandom()];
    // To ensure case consistency while checking with the returned output text
    targetPhrase = targetPhrase.toLowerCase();
    this.target = targetPhrase;  
  
    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + targetPhrase +';';
    // this.speechService.addGrammar(grammar);
    this.speechService.record(grammar).subscribe(res => {
      console.log('FINISHED listening.. heard ', res);
      this.result = res;
    })
  }
}

