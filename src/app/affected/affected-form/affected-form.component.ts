import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affected-form',
  templateUrl: './affected-form.component.html',
  styleUrls: ['./affected-form.component.css'],
})
export class AffectedFormComponent implements OnInit {
  @Input('affected') affecteds;
  constructor() {}

  ngOnInit(): void {}
}
