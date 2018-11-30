import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myorg-header-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
