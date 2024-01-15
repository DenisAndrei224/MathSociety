import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    // Optionally, navigate to the login page or another route after logout
  }

}
