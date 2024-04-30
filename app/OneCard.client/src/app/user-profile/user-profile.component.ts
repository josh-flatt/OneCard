import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { EditMyProfileComponent } from "../edit-my-profile/edit-my-profile.component";
import { CardUser } from '../models/card-user';
import { UserService } from '../services/card-user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateMyProfileComponent } from "../create-my-profile/create-my-profile.component";
import { NgxVcardModule, VCard } from 'ngx-vcard';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [
        CommonModule,
        EditMyProfileComponent,
        CreateMyProfileComponent,
        NgxVcardModule
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
    public vCard: VCard = {};

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
            this.vCard = {
                name: {
                    firstNames: this.cardUser$.userFirstName,
                    lastNames: this.cardUser$.userLastName,
                },
                kind: "individual",
                photo: this.cardUser$.userProfilePicture,
                email: [
                    this.cardUser$.userEmail,
                ],
                title: this.cardUser$.userJobTitle,
                telephone: [
                    this.cardUser$.userPhoneNumber,
                ]
            };
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



    public generateVCardOnTheFly = (): VCard => {
        // TODO: Generate the VCard before Download
        return {
            name: { firstNames: "John", lastNames: "Doe", addtionalNames: "Auto" },
        };
    };
}
