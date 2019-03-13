import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}
  token?: string;

  signUpUser(email: string, pwd: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then(() => {
        this.notificationService.showSuccess('User registeration successfull!');
        setTimeout(() => {
          this.router.navigate(['/signIn']);
        }, 1500);
      });
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
