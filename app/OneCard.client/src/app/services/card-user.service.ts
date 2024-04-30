import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CardUser } from '../models/card-user';


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

  public updateCardUser(carduser: CardUser): Observable<CardUser> {
    return this.http.put<CardUser>(
      `${environment.apiUrl}/${this.url}`,
      carduser
    );
  }

  public createCardUser(carduser: CardUser): Observable<CardUser> {
    return this.http.post<CardUser>(
      `${environment.apiUrl}/${this.url}`,
      carduser
    );
  }

  public deleteCardUser(carduser: CardUser): Observable<CardUser[]> {
    return this.http.delete<CardUser[]>(
      `${environment.apiUrl}/${this.url}/${carduser.userId}`
    );
  }
}