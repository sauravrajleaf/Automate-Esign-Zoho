import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl =
    'https://zoho-document-esign-backend-production.up.railway.app/uploads'; // Nest.js API endpoint URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    console.log('formData', formData);

    return this.http.post<any>(this.apiUrl, formData);
  }

  getPdf(filename: string): Observable<Blob> {
    console.log('filename in fileservice', filename);
    return this.http.get(`${this.apiUrl}/${filename}`, {
      responseType: 'blob',
    });
  }
}
