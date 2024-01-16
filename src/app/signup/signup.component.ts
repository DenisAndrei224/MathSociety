import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService : AuthService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Call the AuthService to register the user
      this.authService.registerUser(this.registrationForm.value).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // You can handle the success response here
        },
        (error) => {
          console.error('Registration failed', error);
          // You can handle the error response here
        }
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

}
