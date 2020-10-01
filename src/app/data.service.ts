import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  data: any;
  fetchData(): any {
    return this.http.get(
      'https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e'
    );
  }
  getData(): any {
    return this.data;
  }
  setData(data: any): void {
    this.data = data;
  }
}
