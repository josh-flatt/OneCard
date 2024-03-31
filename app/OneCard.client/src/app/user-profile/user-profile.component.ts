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
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
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
