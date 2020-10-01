import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovered-view',
  templateUrl: './recovered-view.component.html',
  styleUrls: ['./recovered-view.component.css'],
})
export class RecoveredViewComponent implements OnInit {
  @Input('recovered') recovered;
  constructor() {}

  ngOnInit(): void {}
}
