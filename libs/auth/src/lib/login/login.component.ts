import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from '../+state';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private facade: AuthFacade
  ) {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(null, Validators.required),
      password: this.formBuilder.control(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    this.facade.authenticate(this.loginForm.value).subscribe(
      (success) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.submitted = false;
        this.loginForm.setErrors({
          authFail: true
        });
      }
    );
  }

}
