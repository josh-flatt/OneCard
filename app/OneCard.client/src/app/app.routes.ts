import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { PackagesComponent } from './packages/packages.component';
// import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [

    //Home Page
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //Other Pages
    { path: 'about-us', component: AboutUsComponent },
    { path: 'packages', component: PackagesComponent},


    //Authentication - temporarily commented out
    // { path: 'login', component: LoginComponent },
    // { path: 'logout', component: LogoutComponent },
    // { path: 'profile', component: UserProfileComponent },

    //404 Page - must be last path in this array.
    { path: '**', component: PageNotFoundComponent },
];
