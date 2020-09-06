import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-subject',
  templateUrl: './upload-subject.component.html',
  styleUrls: ['./upload-subject.component.scss']
})
export class UploadSubjectComponent implements OnInit {
  subjectName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubjectName(target) {

  }

  onSubjectUpload(fileList){
    console.log('files list ', fileList);

  }

}
