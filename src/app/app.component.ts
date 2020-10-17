import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Patient } from './utils/patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  patientData:Patient[];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((data:Patient[]) => {
      this.patientData = data;
    });
  }
}
