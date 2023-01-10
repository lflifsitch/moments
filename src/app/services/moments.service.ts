import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../components/Response';
import { Moments } from '../components/Moments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentsService {

private baseApiUrl = environment.baseApiUrl

private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  getMoment(): Observable<Response<Moments[]>> {

    return this.http.get<Response<Moments[]>>(this.apiUrl)


  }

  createMoment(formData: FormData): Observable<FormData> {

    return this.http.post <FormData>(this.apiUrl, formData)
  }
}
