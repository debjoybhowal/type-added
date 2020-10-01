import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllAffected(): any {
    return this.http.get(
      'https://jsonblob.com/api/56dd39e0-03a8-11eb-909d-174cccafc67e'
    );
  }
}
