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
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.css'
})
export class EditUserProfileComponent {
  @Input() cardUser?: CardUser;
  @Input() cardUserEmail?: string;
  @Input() authenticatedUser?: any;

  cardUsers: CardUser[] = [];

  constructor(public authService: AuthService, private cardUserService: UserService) { }

  ngOnInit(): void {
    this.cardUserEmail = this.authenticatedUser.email
  }

  updateCardUser(cardUser: CardUser) {
    this.cardUserService
      .updateCardUser(cardUser)
      .subscribe((result: CardUser[]) => (this.cardUsers = result))
  }

  deleteCardUser(cardUser: CardUser) {
    this.cardUserService
      .deleteCardUser(cardUser)
      .subscribe((result: CardUser[]) => (this.cardUsers = result))
  }

  createCardUser(cardUser: CardUser) {
    this.cardUserService
      .createCardUser(cardUser)
      .subscribe((result: CardUser[]) => (this.cardUsers = result))
  }
}
