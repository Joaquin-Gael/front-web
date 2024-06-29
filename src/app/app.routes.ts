import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./blog/blog.routes').then(c => c.BLOG_ROUTES)
    },
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.routes').then(c => c.AUTH_ROUTES)
    },
    {
        path:'**',
        redirectTo:'/404_not_found'
    }
];
