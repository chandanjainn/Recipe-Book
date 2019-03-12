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
    firebase.auth().createUserWithEmailAndPassword(email, pwd);
  }

  logIn(email: string, pwd: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(() => {
        this.router.navigate(['/recipes']);
        this.getTokenId().then(token => {
          this.token = token;
        });
      });
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
