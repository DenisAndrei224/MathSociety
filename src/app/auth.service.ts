// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private apiUrl = 'http://localhost:8800/api/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    // Implement your registration logic here
    // Make a POST request to your registration API endpoint
    // You can use Angular HttpClient to make HTTP requests

    // Example:
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

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
