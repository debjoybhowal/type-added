import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { concatMap, filter, toArray } from 'rxjs/operators';
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

    this.dataService.getData().subscribe((patientData) => {
      const subject = new BehaviorSubject(patientData);
      subject
        .pipe(
          concatMap((item) => from(item)),
          filter((item: any) => !item.isInRecovered),
          toArray()
        )
        .subscribe((patientData) => (this.affected = patientData));
      subject.complete();
    });
  }
}
