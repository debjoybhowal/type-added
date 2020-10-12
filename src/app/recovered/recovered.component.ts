import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { concatMap, filter, map, mergeMap, toArray } from 'rxjs/operators';
import { BehaviorSubject, concat, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.css'],
})
export class RecoveredComponent implements OnInit {
  constructor(private dataService: DataService) {}
  recovered;
  ngOnInit(): void {
    this.dataService.getData().subscribe((patientData) => {
      const subject = new BehaviorSubject(patientData);
      subject
        .pipe(
          concatMap((item) => from(item)),
          filter((item: any) => item.isInRecovered),
          toArray()
        )
        .subscribe((patientData) => (this.recovered = patientData));
      subject.complete();
    });
  }
}
