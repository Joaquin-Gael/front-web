import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { CommentsComponent } from './comments/comments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeContentComponent } from './home-content/home-content.component';

export const BLOG_ROUTES: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'posts',
                component:HomeContentComponent
            }
        ]
    },
    {
        path:'comment/:id',
        component:CommentsComponent
    },
    {
        path:'404_not_found',
        component:NotFoundComponent
    }
];
