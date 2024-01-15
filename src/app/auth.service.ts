// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Implement actual authentication logic here
    // For simplicity, using a basic example
    this.isAuthenticated = username === 'denis' && password === 'parola00';
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
