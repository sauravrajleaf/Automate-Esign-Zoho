import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'automate-esign-document-frontend';

  uploadFile = () => {
    console.log('I am in uplaod');
    return;
  };

  onFileSelected = (event: any) => {
    console.log('event', event);
    return;
  };

  previewFile = () => {
    console.log('clicked on Preview File');
    return;
  };

  addEsignTags = () => {
    console.log('clicked on Add Esign Tags');
    return;
  };

  submitEsign = () => {
    console.log('clicked on Submit to Esign');
    return;
  };
}
