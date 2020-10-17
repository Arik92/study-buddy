import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload-subject',
  templateUrl: './upload-subject.component.html',
  styleUrls: ['./upload-subject.component.scss']
})
export class UploadSubjectComponent implements OnInit {
  subjectName: string = '';
  subjectFile: File;
  formData: FormData = new FormData;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }  

  onSubjectUpload(fileList){
    console.log('files list ', fileList);
    if (fileList.length > 0) {
      const file = fileList[0];
    }
  }

  async submit() {
    //validate
    if (this.subjectName!=='' && this.subjectFile) {
      const submitResult = await this.send();
      console.log('sent result? ', submitResult);
    } else {
      alert('Something went wrong.. ');
    }

  }    
  send() {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    this.formData.append('info', this.subjectFile, this.subjectName);
    let headersConfig = new HttpHeaders().set("Content-Type", "application/json").set("Accept", "application/json");
        /** In Angular 5, including the header Content-Type can invalidate your request */

        return new Promise((resolve, reject) => {
         this.httpClient.post(endpoint, formData,{ headers: headersConfig }).subscribe(data =>{
           if (data) {
            resolve(data);
           } else {
             reject('error fetching user');
           }
           
         });
        });
  }
}
