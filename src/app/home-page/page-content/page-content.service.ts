import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  constructor(private http: HttpClient) { }

  getHostCityList() {
    return this.http.get('assets/hot-cities.json').pipe(
      map(res => res['citylist']),
      catchError(this.handleError)
    );
  }

  getSakuraTrips() {
    return this.http.get('assets/japan-sakura-trip.json').pipe(
        map(res => {return res['trips'] || []; })
    );
  }

  getClassicCityList() {
    return this.http.get('assets/classic-trip-city.json').pipe(
        map(res => res['citylist'] || [])
    );
  }

  getTripStoryList() {
    return this.http.get('assets/trip-storys.json').pipe(
        map(res => res['storyList'] || [])
    );
  }

  getTripExperList() {
    return this.http.get('assets/high-exper-list.json').pipe(
        map(res => res['experList'] || [])
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    return of([]);
  }
}
