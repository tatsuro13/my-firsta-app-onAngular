import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  test: Date = new Date();

  errors: any = [];

  constructor(private authService: AuthService, private router: Router) {}

  login(loginrForm) {
    console.log(loginrForm.value);
    this.authService.login(loginrForm.value).subscribe(
      (token) => {
        this.router.navigate(['/products']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.errors = err.error.errors;
      }
    );
  }

  ngOnInit() {}
}
