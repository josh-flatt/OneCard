import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment.development';
import { environment } from '../../environments/environment';
import { User } from '@auth0/auth0-angular';
import { CardUser } from '../models/card-user';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "CardUser";


  constructor(private http: HttpClient) { }

  public getCardUsers(): Observable<CardUser[]> {
    return this.http.get<CardUser[]>(
      `${environment.apiUrl}/${this.url}`
    );
  }

  public getCardUserById(userId: number): Observable<CardUser> {
    return this.http.get<CardUser>(
      `${environment.apiUrl}/${this.url}/id/${userId}`
    );
  }

  public getCardUserByUsername(userEmail: string): Observable<CardUser> {
    return this.http.get<CardUser>(
      `${environment.apiUrl}/${this.url}/username/${userEmail}`
    );
  }

  public updateCardUser(carduser: CardUser): Observable<CardUser[]> {
    return this.http.put<CardUser[]>(
      `${environment.apiUrl}/${this.url}`,
      carduser
    );
  }

  public createCardUser(carduser: CardUser): Observable<CardUser[]> {
    return this.http.post<CardUser[]>(
      `${environment.apiUrl}/${this.url}`,
      carduser
    );
  }

  public deleteCardUser(carduser: CardUser): Observable<CardUser[]> {
    return this.http.delete<CardUser[]>(
      `${environment.apiUrl}/${this.url}/${carduser.id}`
    );
  }
}