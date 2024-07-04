import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponce, UserCredentials } from '../models/auth_models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'https://8000-idx-back-web-1719287871374.cluster-iesosxm5fzdewqvhlwn5qivgry.cloudworkstations.dev'

  constructor(private http: HttpClient) { }

  getUserID():Observable<any>{
    const id = this.http.get(`${this.url}/api/token/user/id/`)
    return id
  }

  getToken(refresh:string){
    const token = this.http.post<TokenResponce>(`${this.url}/api/token/refresh/`,{'refresh':refresh})
    return token
  }

  logOut(){
    console.log('logout')
  }

  logIn(credentials:UserCredentials):Observable<any>{
    return this.http.post<TokenResponce>(`${this.url}/api/token/`,credentials)
  }

  setVisit(): void{
    const responce = this.http.post(`${this.url}/api/visit/`,{}).subscribe(
      res => console.log(res),
      error => console.error(error)
    )
  }
}
