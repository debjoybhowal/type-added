import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { concatMap, filter, toArray } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Patient } from '../utils/patient.model';

@Component({
  selector: 'app-affected',
  templateUrl: './affected.component.html',
})
export class AffectedComponent implements OnInit {
  constructor(private dataService: DataService) {}
  affected:Patient[];
  ngOnInit(): void {

    this.dataService.getData().subscribe((patientData:Patient[]) => {
      const subject = new BehaviorSubject<Patient[]>(patientData);
      subject
        .pipe(
          concatMap((item:Patient[]) => from(item)),
          filter((item: Patient) => !item.isInRecovered),
          toArray()
        )
        .subscribe((patientData:Patient[]) => (this.affected = patientData));
      subject.complete();
    });
  }
}
