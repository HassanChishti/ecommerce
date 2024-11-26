import { Injectable } from '@angular/core';
import { AuthService, url } from './auth.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http: HttpClient, public auth: AuthService) { }

    // Company-related operations;
    postCompany(data: any): Observable<any> {
      console.log('AUTH POST:', url + 'insertcompany', data);
      return this.http.post(url + 'insertcompany', data).pipe(
        map((res: any) => res)
      );
    }
  
    getCompany(): Observable<any> {
      console.log('AUTH GET:', url + 'getcompany');
      return this.http.get(url + 'getcompany').pipe(
        map((res: any) => res)
      );
    }
  
    deleteCompany(data: any): Observable<any> {
      console.log('AUTH DELETE:', url + 'deletecompany', data);
      return this.http.post(url + 'deletecompany', data).pipe(
        map((res: any) => res)
      );
    }
  
    updateCompany(data: any): Observable<any> {
      console.log('AUTH UPDATE:', url + 'updatecompany', data);
      return this.http.post(url + 'updatecompany', data).pipe(
        map((res: any) => res)
      );
    }
  
    // Image-related operations
    uploadImage(data: FormData): Observable<any> {
      console.log('AUTH POST IMAGE:', url + 'uploadimage', data);
      return this.http.post(url + 'uploadimage', data).pipe(
        map((res: any) => res)
      );
    }
  
    getImages(): Observable<any> {
      console.log('AUTH GET IMAGES:', url + 'getimages');
      return this.http.get(url + 'getimages').pipe(
        map((res: any) => res)
      );
    }
  
    deleteImage(data: any): Observable<any> {
      console.log('AUTH DELETE IMAGE:', url + 'deleteimage', data);
      return this.http.post(url + 'deleteimage', data).pipe(
        map((res: any) => res)
      );
    }
}
