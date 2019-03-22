import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExhibitPageService {

  constructor(private http: HttpClient) { }

  getPlatList() {
    return this.http.get('assets/exhibit-play-list.json').pipe(
        map(res => res['playList'] || [])
    );
  }

  getHouseData(id: number) {
    return this.http.get('assets/house-detail-list.json').pipe(
        map(res => res['list'][id] || {})
    );
  }

}
