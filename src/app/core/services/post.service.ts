import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string = 'https://8000-idx-back-web-1719287871374.cluster-iesosxm5fzdewqvhlwn5qivgry.cloudworkstations.dev'

  constructor(private http: HttpClient) { }
}
