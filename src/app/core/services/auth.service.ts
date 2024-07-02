import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponce, UserCredentials } from '../models/auth_models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(refresh:string){
    const token = this.http.post<TokenResponce>('http://127.0.0.1:8000/api/token/',{'refresh':refresh})
    return token
  }

  logOut(){
    console.log('logout')
  }

  logIn(credentials:UserCredentials):Observable<any>{
    return this.http.post<TokenResponce>('http://127.0.0.1:8000/api/token/',credentials)
  }

  setVisit(): void{
    const responce = this.http.post('http://127.0.0.1:8000/api/visit/',{}).subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }
}
