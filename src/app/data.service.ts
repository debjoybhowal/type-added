import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Patient } from './utils/patient.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private data = new ReplaySubject<Patient[]>();
  private globalData: Patient[];

  fetchData(): void {
    this.http
      .get('https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e')
      .subscribe((patientData: Patient[]) => {
        this.data.next(patientData);
        this.globalData = patientData;
      });
  }
  getData(): ReplaySubject<Patient[]> {
    if (!this.globalData) this.fetchData();
    return this.data;
  }
  setData(data: Patient[]): void {
    data.forEach((item: Patient) => {
      this.globalData = this.globalData.map((patient: Patient) => {
        return item.id == patient.id ? item : patient;
      });
    });

    this.data.next(this.globalData);
  }
  removeData(data: Patient[]): void {
    data.forEach((item: Patient) => {
      this.globalData = this.globalData.filter((patient: Patient) => {
        return item.id !== patient.id;
      });
    });

    this.data.next(this.globalData);
  }
  addData(data: Patient): void {
    this.globalData = [...this.globalData, data];
    this.data.next(this.globalData);
  }
}
