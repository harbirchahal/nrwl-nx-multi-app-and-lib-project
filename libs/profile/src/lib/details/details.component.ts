import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileFacade } from '../+state/profile.facade';

@Component({
  selector: 'profile-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private facade: ProfileFacade
  ) {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.required),
      lastName: this.formBuilder.control('', Validators.required)
    });
  }

  ngOnInit() {
    this.facade.profile$.subscribe(profile => {
      this.profileForm.setValue(profile);
    });
  }

  onSubmit() {
    this.facade.saveProfile(this.profileForm.value);
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
