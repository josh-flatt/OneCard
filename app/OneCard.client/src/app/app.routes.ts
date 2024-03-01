import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [

    //Home Page
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //Other Pages
    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'heroes-list', component: HeroesListComponent },
    { path: 'about-us', component: AboutUsComponent },


    //404 Page - must be last path in this array.
    { path: '**', component: PageNotFoundComponent },
];
