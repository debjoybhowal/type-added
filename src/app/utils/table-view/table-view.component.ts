import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  @Input() patientData:Patient[];
  @Input() recoveredMode:boolean;
  query:string="";

  ngOnInit(): void {}
}
