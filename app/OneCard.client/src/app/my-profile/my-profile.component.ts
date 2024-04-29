import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { EditMyProfileComponent } from "../edit-my-profile/edit-my-profile.component";
import { CardUser } from '../models/card-user';
import { UserService } from '../services/card-user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { CreateMyProfileComponent } from "../create-my-profile/create-my-profile.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
  imports: [
    CommonModule,
    EditMyProfileComponent,
    CreateMyProfileComponent
  ]
})
export class MyProfileComponent implements OnInit {

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
    this.authService.user$.subscribe((success: any) => {
      this.user = success;
      this.userToEditEmail = this.user.email;
    });
  }

  public ngOnInit(): void {
    console.log(this.userToEditEmail)

    // this.cardUserService.getCardUserByUsername(this.userToEditEmail).subscribe((data: any) => {
    //   this.cardUser$ = data;
    // });

    // this.userToView$ = this.cardUserService.getCardUserById(this.cardUserId);
    // this.userToView$.subscribe((data) => {
    // this.cardUser$ = data;
    // });
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
