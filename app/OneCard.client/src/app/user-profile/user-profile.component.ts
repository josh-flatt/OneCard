import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { EditUserProfileComponent } from "../edit-user-profile/edit-user-profile.component";
import { CardUser } from '../models/card-user';
import { UserService } from '../services/card-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [
        CommonModule,
        EditUserProfileComponent
    ]
})
export class UserProfileComponent implements OnInit {

    cardUserId: number = 0;
    user: any;
    userToEdit?: any;
    userToEditEmail?: any;
    userToView?: any;

    constructor(public authService: AuthService, private cardUserService: UserService, private route: ActivatedRoute) {
        this.user = {};
    }

    public ngOnInit(): void {
        this.authService.user$.subscribe((success: any) => {
            this.user = success;
        });
        this.userToEditEmail = this.user.email;
        this.route.params.subscribe(params => {
            this.cardUserId = params['cardUserId'];
        })
        this.userToView = this.getCardUserById()
    }

    editCardUser() {
        this.userToEdit = this.getCardUserByEmail(this.userToEditEmail);
        // this.userToEdit = user;
    }

    getCardUserByEmail(cardUserEmail: string) {
        return this.cardUserService.getCardUserByUsername(this.userToEdit);
    }

    getCardUserById() {
        return this.cardUserService.getCardUserById(this.cardUserId);
    }
}
