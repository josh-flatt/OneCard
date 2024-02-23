import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'heroes-list', component: HeroesListComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },


    //404 Page - must be last path in this array.
    { path: '**', component: PageNotFoundComponent },
];
