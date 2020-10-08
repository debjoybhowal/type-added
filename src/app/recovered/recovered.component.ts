import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.css'],
})
export class RecoveredComponent implements OnInit {
  constructor(private dataService: DataService) {}
  recovered;
  ngOnInit(): void {
    this.dataService.getData().subscribe(patientData=>this.recovered=patientData);

  }
}
