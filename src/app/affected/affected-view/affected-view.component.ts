import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affected-view',
  templateUrl: './affected-view.component.html',
  styleUrls: ['./affected-view.component.css'],
})
export class AffectedViewComponent implements OnInit {
  @Input('affected') affecteds;
  constructor() {}

  ngOnInit(): void {}
}
