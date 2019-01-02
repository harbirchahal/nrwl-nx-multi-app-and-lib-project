import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'MyOrg Admin App';

  constructor() { }

  ngOnInit() {
  }

}
