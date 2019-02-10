import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  token?: string;

  signUpUser(email: string, pwd: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .catch(error => console.log(error));
  }

  logIn(email: string, pwd: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(response => {
        this.router.navigate(['/recipes']);
        this.getTokenId().then(token => {
          this.token = token;
        });
      })
      .catch(error => console.log(error));
  }

  private getTokenId() {
    return firebase.auth().currentUser.getIdToken();
  }

  getToken() {
    this.getTokenId().then(token => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signIn']);
  }
}
