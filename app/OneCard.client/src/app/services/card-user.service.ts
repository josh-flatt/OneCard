import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment.development';
import { environment } from '../../environments/environment';
import { User } from '@auth0/auth0-angular';
import { CardUser } from '../models/card-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "User";

  constructor(private http: HttpClient) { }

  public getCardUsers(): Observable<CardUser[]> {
    return this.http.get<CardUser[]>(
      `${environment.apiUrl}/${this.url}`
    );
  }

  public getCardUserById(carduser: CardUser): Observable<CardUser[]> {
    return this.http.get<CardUser[]>(
      `${environment.apiUrl}/${this.url}/${carduser.id}`
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