import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    initializeApp({
      apiKey: '',
      authDomain: 'book-of-spices.firebaseapp.com'
    });
  }
}
