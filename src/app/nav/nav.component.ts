import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../utils/patient.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  @Input('patientData') patientData: Patient[];
  isCollapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
