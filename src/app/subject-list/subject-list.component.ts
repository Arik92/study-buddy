import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  mode: string = '';
  subjectNames: string[] = [];
  subjectLinks: string[] = [];
  linkPrefix: string = '';

  constructor(private route: ActivatedRoute, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode');    
    this.linkPrefix = this.mode === 'teach' ? 'learn' : 'questions';
    this.getSubjectNames();
    this.setSubjectLinks();
  }

  getSubjectNames() {
    this.subjectNames = this.subjectService.getSubjectNames();
  }

  setSubjectLinks() {
    this.subjectLinks = this.subjectNames.map(name => {
      return '/' + this.linkPrefix + '/' +name.replace(/ /g, '_',) 
    })
  }

}
