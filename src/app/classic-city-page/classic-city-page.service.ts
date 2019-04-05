import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassicCityPageService {

  constructor(private http: HttpClient) { }

  getClassicCityList() {
    return this.http.get('assets/city-detail-list.json').pipe(
        map(res => res['cityList'] || [])
    );
  }

  getCityById(id: string) {
    return this.http.get('assets/city-detail-list.json').pipe(
        map(res => {
          return res['cityList'][0] || {};
        })
    );
  }

  getExperType(city: string) {
    return this.http.get('assets/experience-type-list.json').pipe(
        map(res => {return res['list'].find(item => {return item.name === city; }) || {}; })
    );
  }
}

