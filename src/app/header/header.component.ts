import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
  constructor(
    private dataStorage: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  saveData() {
    this.dataStorage.storeRecipe().subscribe();
  }

  fetchData() {
    this.dataStorage.getRecipes();
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }

  logOut() {
    this.authService.logOut();
  }
}
