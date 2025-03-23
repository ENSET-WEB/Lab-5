// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
  };
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit(): void {
    this.authService
      .login(this.formData.username, this.formData.password)
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.message = 'Login successful!';
            this.router.navigate(['/home']);
          } else {
            this.message = 'Invalid credentials.';
          }
        },
        error: (error) => {
          this.message = 'Login failed. Try again.';
          console.error(error);
        },
      });
  }
}
