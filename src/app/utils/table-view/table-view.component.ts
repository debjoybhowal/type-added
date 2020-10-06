import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  @Input() patientData;
  @Input() recoveredMode;
  constructor() {}

  ngOnInit(): void {}
}
