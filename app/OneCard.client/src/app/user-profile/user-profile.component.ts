import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [
        CommonModule
    ],
    // templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    template: `
<ul *ngIf="this.authService.user$ | async as user">
    <li>email: {{ user.email }}</li>
    <li>email verified: {{ user.email_verified }}</li>
    <li>family name: {{ user.family_name }}</li>
    <li>given name: {{ user.given_name }}</li>
    <li>name: {{ user.name }}</li>
    <li>nickname: {{ user.nickname }}</li>
    <li>phone number: {{ user.phone_number }}</li>
    <li>picture: {{ user.picture }}</li>
    <li>profile: {{ user.profile }}</li>
    <li>website: {{ user.website }}</li>
    </ul>
  `
})
export class UserProfileComponent implements OnInit {

    user: any;

    constructor(public authService: AuthService) {
        this.user = {};
    }

    public ngOnInit(): void {
        this.authService.user$.subscribe((success: any) => {
            this.user = success;
        });
    }
}
