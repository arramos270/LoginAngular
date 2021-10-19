import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AuthRegisterResponse } from '../models/interfaces/auth.interface';
import { AuthRegisterRequest } from '../models/dto/auth.dto';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(registerDto: AuthRegisterRequest) : Observable<AuthRegisterResponse>{
    let requestUrl = `${environment.apiBaseUrl}/auth/signup`;
    return this.http.post<AuthRegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);
  }


}
