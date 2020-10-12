import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private data = new ReplaySubject();
  private globalData: any;

  fetchData(): any {
    return this.http
      .get('https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e')
      .subscribe((patientData) => {
        this.data.next(patientData);
        this.globalData = patientData;
      });
  }
  getData(): any {
    if (!this.globalData) this.fetchData();
    return this.data;
  }
  setData(data: any[]): void {
    data.forEach((item) => {
      console.log(item);
      this.globalData=this.globalData.map((patient) => {
        return item.id == patient.id?item:patient;
      });
    });

    this.data.next(this.globalData);
  }
  removeData(data: any[]): void {
    console.log(data)
    data.forEach((item) => {
      console.log(item);
      this.globalData=this.globalData.filter((patient) => {
        return item.id !== patient.id;
      });
    });

    this.data.next(this.globalData);
  }
  addData(data:any):void{
    this.globalData=[...this.globalData,data];    
    this.data.next(this.globalData);
  }
}
