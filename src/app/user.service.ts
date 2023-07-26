import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { MoreUser } from './more-user';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getMoreUser(): Observable<MoreUser[]>{
    return this.http.get<MoreUser[]>(`${this.apiServerUrl}/form/all`);
  }
  public addUser(user : User) : Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/form/add`, user);
  }
  public updateUser(user : User) : Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/form/update`, user);
  }
  public deleteUser(userId : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/form/delete/${userId}`);
  }
}
