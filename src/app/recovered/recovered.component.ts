import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { concatMap, filter, toArray } from 'rxjs/operators';
import { BehaviorSubject, from } from 'rxjs';
import { Patient } from '../utils/patient.model';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
})
export class RecoveredComponent implements OnInit {
  constructor(private dataService: DataService) {}
  recovered: Patient[];
  ngOnInit(): void {
    this.dataService.getData().subscribe((patientData: Patient[]) => {
      const subject = new BehaviorSubject<Patient[]>(patientData);
      subject
        .pipe(
          concatMap((item: Patient[]) => from(item)),
          filter((item: Patient) => item.isInRecovered),
          toArray()
        )
        .subscribe((patientData: Patient[]) => (this.recovered = patientData));
      subject.complete();
    });
  }
}
