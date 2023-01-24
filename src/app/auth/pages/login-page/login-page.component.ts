import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  public loading = false
  public loginForm = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required,Validators.email]),
    password: new FormControl('cityslicka', [Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  })
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {
    this.loading = true
    this.authService.login({
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('password')?.value || ''
    }).subscribe((user) => {
      this.loading = false
      if (user) {
        this.router.navigate(['dashboard', 'students'])
      }
    })
  }
}
