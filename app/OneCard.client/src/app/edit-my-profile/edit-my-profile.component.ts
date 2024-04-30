import { Component, Input } from '@angular/core';
import { CardUser } from '../models/card-user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/card-user.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-edit-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-my-profile.component.html',
  styleUrl: './edit-my-profile.component.css'
})
export class EditMyProfileComponent {
  @Input() cardUser: CardUser = new CardUser;
  @Input() authenticatedUser?: any;
  @Input() showEditPage?: boolean;

  cardUsers: CardUser = new CardUser;

  constructor(public authService: AuthService, private cardUserService: UserService) {
    if (!this.cardUser) {
      this.cardUser = new CardUser;
    }
  }

  ngOnInit(): void { }

  updateCardUser(cardUser: CardUser) {
    this.cardUserService
      .updateCardUser(cardUser)
      .subscribe((result: CardUser) => (this.cardUsers = result))
  }

  // deleteCardUser(cardUser: CardUser) {
  //   this.cardUserService
  //     .deleteCardUser(cardUser)
  //     .subscribe((result: CardUser) => (this.cardUsers = result))
  // }

  createCardUser(cardUser: CardUser) {
    this.cardUserService
      .createCardUser(cardUser)
      .subscribe((result: CardUser) => (this.cardUsers = result))
  }
}
