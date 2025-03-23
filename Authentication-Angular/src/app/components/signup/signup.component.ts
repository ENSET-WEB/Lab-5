// src/app/components/signup/signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formData = {
    username: '',
    email: '',
    password: '',
  };
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit(): void {
    this.authService
      .signup(
        this.formData.username,
        this.formData.email,
        this.formData.password
      )
      .subscribe({
        next: (response) => {
          this.message = 'Signup successful!';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        },
        error: (error) => {
          this.message = 'Signup failed. Try again.';
          console.error(error);
        },
      });
  }
}
