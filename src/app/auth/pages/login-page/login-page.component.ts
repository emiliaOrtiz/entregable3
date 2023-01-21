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
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required,Validators.email]),
    password: new FormControl('cityslicka', [Validators.required]),
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
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
    }).subscribe((user) => {
      this.loading = false
      if (user) {
        this.router.navigate(['dashboard', 'students'])
      }
    })
  }
}
