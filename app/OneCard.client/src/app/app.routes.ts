import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PackagesComponent } from './packages/packages.component';

export const routes: Routes = [

    //Home Page
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //Other Pages
    { path: 'about-us', component: AboutUsComponent },
    { path: 'packages', component: PackagesComponent},


    //Log In - Log Out
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    //404 Page - must be last path in this array.
    { path: '**', component: PageNotFoundComponent },
];
