import { Component, Inject, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [
        CommonModule
    ],
    // templateUrl: './logout.component.html',
    styleUrl: './logout.component.css',
    template: `
    <!-- <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template> -->
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <!-- <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
    </button> -->
    <button class="nav-link" aria-current="page"
        (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })" routerLinkActive="activebutton"
        ariaCurrentWhenActive="page">
        Log Out
    </button>
</ng-container>

<ng-template #loggedOut>
    <!-- <button (click)="auth.loginWithRedirect()">Log in</button> -->
</ng-template>
  `,
})
export class LogoutComponent {
    constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

    // constructor(
    //   @Inject(DOCUMENT) public document: Document,
    //   private auth: AuthService
    // ) { }

    // logout() {
    //   this.auth.logout({
    //     logoutParams: {
    //       returnTo: this.document.location.origin
    //     }
    //   });
    // }
}
