import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from './fileUpload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'automate-esign-document-frontend';
  selectedFile: File = null!;

  private http!: HttpClient;

  constructor(
    private readonly httpClient: HttpClient,
    private fileUploadService: FileUploadService
  ) {}

  uploadFile = (event: any) => {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response: any) => {
          console.log('File uploaded successfully!', response);
          // Handle the response, update UI if necessary.
        },
        (error: any) => {
          console.error('Error uploading file:', error);
          // Handle errors, show error messages to users.
        }
      );
    } else {
      console.error('No file selected!');
      // Show a message to users indicating that no file is selected.
    }
  };

  onFileSelected = (event: any) => {
    console.log('event', event);
    this.selectedFile = event.target.files[0];
    // console.log("event.target.files[0];",event.target.files[0];)
    // this.uploadFile(event);

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
