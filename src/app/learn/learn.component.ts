import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  subjectParam: string = '';
  subject;

  constructor(private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectParam = this.route.snapshot.paramMap.get('subject');        
    this.subject = this.subjectService.getSubjectByName(this.subjectParam);
    console.log('subject is ', this.subject);
  }

}
