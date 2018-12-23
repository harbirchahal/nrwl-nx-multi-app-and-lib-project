import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'MyOrg Client App';

  constructor() {}

  ngOnInit() {}
}
