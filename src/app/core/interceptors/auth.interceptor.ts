import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService)
  const rouer = inject(Router)
  const token = authService.getToken(localStorage.getItem('refresh')!).subscribe(
    res => {
      console.log(res)
    },
    error => {
      console.error(error)
    }
  )

  if (token){
    req = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${token}`,
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }
    )
  }

  return next(req).pipe(
    catchError((error) => {
      const CODES = [401,403]

      if (CODES.includes(error.status)){
        authService.logOut()
        rouer.navigate(['/auth'])
      }
      return throwError(()=>error)
    }
  )
  )
};
