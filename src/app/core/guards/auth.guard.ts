import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('session')
  const rouer = inject(Router)
  console.log(`Token de session: ${token}`)
  if (token === null){
    rouer.navigateByUrl('/auth')
    return false
  }
  return true;
};
