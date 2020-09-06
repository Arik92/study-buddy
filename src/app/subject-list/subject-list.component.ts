import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  mode: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode');
    
  }

}
