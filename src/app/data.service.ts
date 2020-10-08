import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private data= new BehaviorSubject(undefined);

  
  fetchData(): any {
    return this.http.get(
      'https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e'
    ).subscribe(patientData=>{
      this.data.next(patientData);
    });
  }
  getData(): any {
    if(!this.data.getValue())
    this.fetchData();
    return this.data.asObservable();
  }
  setData(data: any): void {
    this.data.next(data);    
  }
}
