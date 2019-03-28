import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlusPageService {

  constructor(private http: HttpClient) { }

  getPlusDestList() {
    return this.http.get('assets/plus-destination-list.json').pipe(
        map(res => res['destList']),
        catchError(this.handleError)
    );
  }

  getPluSpecialHouseList() {
    return this.http.get('assets/plus-special-houses.json').pipe(
        map(res => res['houses'] || [])
    );
  }

  getPlusInspireList() {
    return this.http.get('assets/plus-inspire-list.json').pipe(
        map(res => res['list'] || [])
    );
  }

  getPlusHouseList() {
    return this.http.get('assets/plus-house-list.json').pipe(
        map(res => res['houseList'] || [])
    );
  }

  getDestById(id: string) {
      return this.http.get('assets/plus-destination-list.json').pipe(
          map(res => {
              return res['destList'].find(item => {return item.id == id;}) || {};
          })
      );
  }

    geInpireById(id: string) {
        return this.http.get('assets/plus-inspire-list.json').pipe(
            map(res => {
                return res['list'].find(item => {return item.id == id;}) || {};
            })
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

    goPlusMore() {
        window.open('https://www.airbnb.cn/plus','_blank');
    }
}
