import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user: any) {
  return this.http.post('https://reqres.in/api/users' , user)
  }

  getAll() {
    return this.http.get('https://reqres.in/api/users')
  }
}