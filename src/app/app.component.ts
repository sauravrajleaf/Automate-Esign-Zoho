import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from './fileUpload.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { pipe } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'automate-esign-document-frontend';
  selectedFile: File = null!;
  selectedFileName: string = null!;
  pdfContent: any;
  hashFileName: string = null!;
  fileURL: string = null!;
  private http!: HttpClient;

  constructor(
    private readonly httpClient: HttpClient,
    private fileUploadService: FileUploadService,
    private sanitizer: DomSanitizer
  ) {}

  uploadFile = (event: any) => {
    if (this.selectedFile) {
      console.log('this.selectedFile', this.selectedFile);
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response: any) => {
          this.hashFileName = response.filename;
          console.log(
            'File uploaded successfully!',
            response,
            this.hashFileName
          );
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
    // console.log('event', event);
    this.selectedFile = event.target.files[0];
    this.selectedFileName = event.target.files[0].name;
    console.log('this.selectedFile', this.selectedFile);
    console.log('this.selectedFileName', this.selectedFileName);
    // console.log("event.target.files[0];",event.target.files[0];)
    // this.uploadFile(event);

    return;
  };

  previewFile = () => {
    console.log('clicked on Preview File');
    this.fileUploadService.getPdf(this.hashFileName).subscribe(
      (data: Blob) => {
        const pdfFile = new Blob([data], { type: 'application/pdf' });
        console.log('pdfFile', pdfFile);
        this.fileURL = URL.createObjectURL(pdfFile);
        this.pdfContent = this.getSanitizedURL(this.fileURL);
      },
      (error) => {
        console.error('Error loading PDF:', error);
      }
    );
    return;
  };

  getSanitizedURL(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  addEsignTags = () => {
    console.log('clicked on Add Esign Tags');
    return;
  };

  submitEsign = () => {
    console.log('clicked on Submit to Esign');
    return;
  };
}
