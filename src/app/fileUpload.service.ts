import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    return this.http.post<any>(this.apiUrl, formData);
  }
}
