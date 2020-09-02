import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";

interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {
    speechRecognition: any;

    constructor(private zone: NgZone) {
    }

    record(grammar: string): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = window as unknown as IWindow;
            this.speechRecognition = new webkitSpeechRecognition();
            // this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = false;
            //this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;
            this.speechRecognition.grammars.addFromString(grammar, 1);

            this.speechRecognition.onresult = speech => {
                let term: string = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            // console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = _.trim(transcript);
                            // console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
              observer.complete();
          };

          this.speechRecognition.start();
          console.log("Say something - We are listening !!!");
      });
  }
  
  DestroySpeechObject() {
      if (this.speechRecognition)
          this.speechRecognition.stop();
  }
}
/**
 * recognition hooks reference
 * this.recognition.onspeechend = () => {
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
 */