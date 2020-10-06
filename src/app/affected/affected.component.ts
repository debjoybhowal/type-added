import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-affected',
  templateUrl: './affected.component.html',
  styleUrls: ['./affected.component.css'],
})
export class AffectedComponent implements OnInit {
  constructor(private dataService: DataService) {}
  affected;
  ngOnInit(): void {
    this.affected = this.dataService.getData();
    if (!this.affected) {
      this.dataService.fetchData();
    }

    this.dataService.getEvenThrownDAta().subscribe(patientData=>this.affected=patientData);
  }
}
