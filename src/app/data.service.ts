import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private data: any;
  private event= new EventEmitter();
  fetchData(): any {
    return this.http.get(
      'https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e'
    ).subscribe(patientData=>{
      this.setData(patientData);
      
    });
  }
  getData(): any {
    return this.data;
  }
  setData(data: any): void {
    this.data = data;
    this.event.emit(data);
  }

  getEvenThrownDAta(){
    return this.event;
  }
}
