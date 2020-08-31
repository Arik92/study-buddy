import { Component, OnInit } from '@angular/core';

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
  recognition: SpeechRecognition = new Window['SpeechRecognition'];
  speechRecognitionList: SpeechGrammarList;
  phrasePara: any = document.querySelector('.phrase');
  resultPara: any = document.querySelector('.result');

  constructor() { }

  ngOnInit(): void {
    this.recognition = new SpeechRecognition();
  this.speechRecognitionList = new SpeechGrammarList();
  }

  selectRandom() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return randomIndex;
  }

  testSpeech() {
    this.status = 'listening';  
    let targetPhrase = this.phrases[this.selectRandom()];
    // To ensure case consistency while checking with the returned output text
    targetPhrase = targetPhrase.toLowerCase();
    this.target = targetPhrase;  
  
    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + targetPhrase +';';
    // var recognition = new SpeechRecognition();
    // var speechRecognitionList = new SpeechGrammarList();
    this.speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  
    this.recognition.start();
  
    this.recognition.onresult = (event) => {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at position 0.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object 
      var speechResult = event.results[0][0].transcript.toLowerCase();
      this.result = 'Speech received: ' + speechResult + '.';
      if(speechResult === targetPhrase) {
        this.result += ': I heard the correct phrase!';
      } else {
        this.result += ': That didn\'t sound right.';
      }
  
      console.log('Confidence: ' + event.results[0][0].confidence);
    }
  
    this.recognition.onspeechend = () => {
      this.recognition.stop();    
      this.status = 'ready';
    }
  
    this.recognition.onerror = (event: any) => {    
      this.status = 'ready';
      this.result = 'Error occurred in recognition: ' + event.error;
    }
    
    this.recognition.onaudiostart = (event: any) => {
        //Fired when the user agent has started to capture audio.
        console.log('SpeechRecognition.onaudiostart');
    }
    
    this.recognition.onaudioend = (event: any) => {
        //Fired when the user agent has finished capturing audio.
        console.log('SpeechRecognition.onaudioend');
    }
    
    this.recognition.onend = (event: any) => {
        //Fired when the speech recognition service has disconnected.
        console.log('SpeechRecognition.onend');
    }
    
    this.recognition.onnomatch = (event: any) => {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        console.log('SpeechRecognition.onnomatch');
    }
    
    this.recognition.onsoundstart = (event: any) => {
        //Fired when any sound — recognisable speech or not — has been detected.
        console.log('SpeechRecognition.onsoundstart');
    }
    
    this.recognition.onsoundend = (event: any) => {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        console.log('SpeechRecognition.onsoundend');
    }
    
    this.recognition.onspeechstart = (event: any) => {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        console.log('SpeechRecognition.onspeechstart');
    }
    this.recognition.onstart = (event: any) => {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        console.log('SpeechRecognition.onstart');
    }
  }  
}

