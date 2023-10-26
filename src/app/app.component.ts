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
}
