import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUsername: string = '';
  newPassword: string = '';

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  signup(): void {
    // Implement user registration logic
    // For simplicity, assume successful signup
    this.authService.login(this.newUsername, this.newPassword);
    // Navigate to the desired route upon successful signup
  }

}
