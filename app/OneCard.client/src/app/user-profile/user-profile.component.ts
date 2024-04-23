import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { EditUserProfileComponent } from "../edit-user-profile/edit-user-profile.component";
import { CardUser } from '../models/card-user';
import { UserService } from '../services/card-user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { CreateUserProfileComponent } from "../create-user-profile/create-user-profile.component";

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [
        CommonModule,
        EditUserProfileComponent,
        CreateUserProfileComponent
    ]
})
export class UserProfileComponent implements OnInit {

    cardUserId: number = 1;
    cardUser$: CardUser = new CardUser;
    user: any;
    userToEdit?: any;
    userToEditEmail: string = "";
    userToView$?: Observable<any>;
    showEditPage: boolean = false;
    showCreatePage: boolean = false;

    constructor(public authService: AuthService, private cardUserService: UserService, private route: ActivatedRoute) {
        this.user = {};
        this.route.params.subscribe(params => {
            this.cardUserId = params['cardUserId'];
        });
    }

    public ngOnInit(): void {
        this.authService.user$.subscribe((success: any) => {
            this.user = success;
            this.userToEditEmail = this.user.email;
        });

        this.userToView$ = this.cardUserService.getCardUserById(this.cardUserId);
        this.userToView$.subscribe((data) => {
            this.cardUser$ = data;
        });
    }

    editCardUser() {
        // console.log(this.userToEditEmail);
        this.cardUserService.getCardUserByUsername(this.userToEditEmail).subscribe((success: any) => {
            this.userToEdit = success;
        })
        this.showCreatePage = false;
        this.showEditPage = true;
    }

    createCardUser() {
        // console.log(this.userToEditEmail);
        this.cardUserService.getCardUserByUsername(this.userToEditEmail).subscribe((success: any) => {
            this.userToEdit = success;
        })
        this.showEditPage = false;
        this.showCreatePage = true;
    }


    getCardUserByEmail(cardUserEmail: string) {
        return this.cardUserService.getCardUserByUsername(this.userToEdit);
    }

    getCardUserById() {
        return this.cardUserService.getCardUserById(this.cardUserId);
    }
}
