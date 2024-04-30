import { Component, Input } from '@angular/core';
import { CardUser } from '../models/card-user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/card-user.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-create-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-my-profile.component.html',
  styleUrl: './create-my-profile.component.css'
})
export class CreateMyProfileComponent {
  @Input() showCreatePage?: boolean;
  @Input() authenticatedUser?: any;

  cardUser: CardUser = new CardUser;

  constructor(public authService: AuthService, private cardUserService: UserService) { }

  ngOnInit(): void { }




  cardUsers: CardUser = new CardUser;

  // updateCardUser(cardUser: CardUser) {
  //   this.cardUserService
  //     .updateCardUser(cardUser)
  //     .subscribe((result: CardUser) => (this.cardUsers = result))
  // }

  // deleteCardUser(cardUser: CardUser) {
  //   this.cardUserService
  //     .deleteCardUser(cardUser)
  //     .subscribe((result: CardUser) => (this.cardUsers = result))
  // }

  createCardUser(cardUser: CardUser) {
    cardUser.userUsername = this.authenticatedUser.email;
    this.cardUserService
      .createCardUser(cardUser)
      .subscribe((result: CardUser) => (this.cardUser = result))
  }
}
