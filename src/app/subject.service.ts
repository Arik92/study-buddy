import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as subjectInfo from '../assets/mock_subjects.json';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjectMockData: Object[] = subjectInfo.subjects;

  constructor(private http: HttpClient) { }

  getSubjectNames(): string[] {
    // return this.http.get('');
    const names =  _.map(this.subjectMockData, (subject) => {return subject.name;});
    return names;
  }
  getSubjectByName(name) {
    name = name.replace(/\_/g, ' ');    
    const responseSubject = _.filter(this.subjectMockData, (subject) => {      
      return subject.name === name;})
    return responseSubject[0];
  }
}
