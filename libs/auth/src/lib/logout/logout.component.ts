import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../+state';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private facade: AuthFacade
  ) { }

  ngOnInit() {
    this.facade.endSession().subscribe(
      (success) => {
        this.router.navigateByUrl('/');
      }
    );
  }

}
