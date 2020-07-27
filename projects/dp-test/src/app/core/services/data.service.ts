import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCarsMedium() {
    return this.http.get<any>('assets/cars_large.json')
      .toPromise()
      .then(res => res.data)
      .then(data => data);
  }
}
